from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
import re
import json
# from flask_cors import CORS

# import re
# import getpass
import os
from dotenv import load_dotenv
# CORS(app)
load_dotenv()

os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")


llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
    # other params...
)



def GiveGeminiOutput(scenario):
    llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
    # other params...
    )

    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """Consider a user who is seeking advice on various legal scenarios related to the Indian Constitution. For each scenario, please provide a response that includes:

    Relevant Constitutional Articles: Identify and explain any articles from the Indian Constitution that are applicable to the scenario.
    Applicable Laws and Regulations: Outline the specific laws and regulations that are relevant to the scenario, based on the Constitution.
    Simplified Explanations of Legal Concepts: Provide clear and easy-to-understand explanations of the legal concepts related to the scenario.
    Common Scenarios and Their Legal Implications: Describe how similar scenarios might be handled under the Constitution and the potential legal implications for each.
    Articles : Suggest Articles means how article can be used here  (Reading Articles online Link article should be real not a dummy link) that will be helpfull to the user which will help him
The scenarios can range from from issues or any other issue related to constitutional rights and protections. answer only related to constitutional related scenarios  #IMPORTANT answer in json format only and for Relevant Constitutional Articles , Applicable Laws and Regulations , Simplified Explanations of Legal Concepts and Common Scenarios and Their Legal Implications the data inside it should be a array not a whole object and should be in title : "" , answer : "" format also give scenario at start like scenario : "" the simplified scenario of user dont include ** , no other format

here's the scenario {scenario} """,
            ),
            ("human", "{scenario}"),
        ]
    )

    chain = prompt | llm
    ai_msg = chain.invoke(
        {
            "scenario": scenario,
        }
    )

    cleaned_json_output = re.sub(r'^```json\s*|\s*```$', '', ai_msg.content, flags=re.DOTALL)

    # Convert the cleaned JSON string to a Python dictionary
    data = json.loads(cleaned_json_output)
    print(ai_msg.content)

    return data

# GiveGeminiOutput()