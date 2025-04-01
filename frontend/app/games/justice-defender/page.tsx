"use client";
import React, { useState } from 'react';
import { Gavel, Scale, BookOpen, Users, AlertCircle, ArrowLeft, Award, AlertTriangle, ScrollText, Shield } from 'lucide-react';

interface Decision {
  id: number;
  text: string;
  points: number;
  feedback: string;
  impact: string;
  benefits: string;
  isOptimal: boolean;
}

interface Case {
  id: number;
  title: string;
  description: string;
  category: string;
  constitutionalRef: string;
  partyALabel: string;
  partyA: string;
  partyBLabel: string;
  partyB: string;
  additionalInfo: string;
  decisions: Decision[];
}

const cases: Case[] = [
  {
    id: 1,
    title: "Freedom of Speech vs. Hate Speech",
    description: "A prominent social media influencer with over 5 million followers posts a 20-minute video extensively criticizing recent government policies on economic reforms and minority rights. The video includes strong language and calls for public protests. While the influencer claims it's legitimate political criticism, the government argues that certain segments could incite social unrest and communal tensions. The video has already led to heated debates and small-scale protests in multiple cities.",
    category: "Civil Rights",
    constitutionalRef: "Article 19(1)(a) (Freedom of Speech) vs. Article 19(2) (Reasonable Restrictions)",
    partyALabel: "Social Media Influencer's Position",
    partyA: "The influencer, a respected political commentator with a history of balanced criticism, argues that the video is a data-backed analysis of policy impacts. They maintain that questioning authority is fundamental to democracy and that their criticism is protected under constitutional free speech provisions. The influencer has submitted evidence of similar critiques being allowed previously.",
    partyBLabel: "Government's Position",
    partyB: "The Ministry of Information and Broadcasting presents specific timestamps from the video that they claim could incite violence. They argue that while criticism is acceptable, the inflammatory language and call for mass protests during a sensitive political period could lead to public disorder, making it subject to reasonable restrictions under Article 19(2).",
    additionalInfo: "Independent media watchdogs have classified 80% of the video's content as factual criticism but flagged certain segments as potentially inflammatory. Several civil rights organizations have filed supporting briefs defending free speech rights.",
    decisions: [
      { 
        id: 1, 
        text: "Option 1: Uphold the right to free speech completely", 
        points: 7, 
        feedback: "While protecting free speech is important, ignoring potential consequences might be risky.",
        impact: "This decision could lead to increased social tensions and potential misuse of unrestricted speech rights. Future similar cases might cite this as precedent for unregulated speech.",
        benefits: "A balanced approach with content disclaimers would better serve both free speech and social responsibility while setting a sustainable precedent.",
        isOptimal: false
      },
      { 
        id: 2, 
        text: "Option 2: Rule it as hate speech and impose legal action", 
        points: 4, 
        feedback: "This might be too harsh and could suppress legitimate criticism.",
        impact: "This could create a chilling effect on free speech and discourage legitimate political discourse. Media might self-censor valid criticism out of fear.",
        benefits: "Adding disclaimers would protect both free speech and social harmony without suppressing voices or creating fear among critics.",
        isOptimal: false
      },
      { 
        id: 3, 
        text: "Option 3: Order content removal while protecting influencer's rights", 
        points: 6, 
        feedback: "A balanced approach but might still limit free expression.",
        impact: "Complete content removal might be seen as censorship and could set a concerning precedent for future political commentary.",
        benefits: "A content disclaimer approach would preserve the content while addressing concerns about potential misinterpretation.",
        isOptimal: false
      },
      { 
        id: 4, 
        text: "Option 4: Mandate content disclaimer but allow it to remain", 
        points: 9, 
        feedback: "Excellent balance between free speech and social responsibility!",
        impact: "This solution protects free speech while acknowledging potential societal impacts. It sets a precedent for responsible content moderation without censorship.",
        benefits: "This optimal decision maintains democratic discourse while promoting responsible speech and creating a framework for future cases.",
        isOptimal: true
      },
      { 
        id: 5, 
        text: "Option 5: Order content modification to remove inflammatory parts", 
        points: 8, 
        feedback: "Good compromise between competing interests.",
        impact: "Partial modification might still be seen as content manipulation and could raise questions about editorial integrity.",
        benefits: "A disclaimer approach would be less intrusive while achieving similar goals of content responsibility.",
        isOptimal: false
      },
      { 
        id: 6, 
        text: "Option 6: Refer to media ethics committee for review", 
        points: 5, 
        feedback: "Delays resolution and might not address constitutional questions directly.",
        impact: "This could lead to prolonged uncertainty and potential jurisdictional conflicts between different regulatory bodies.",
        benefits: "Direct judicial intervention with disclaimers would provide faster, clearer resolution while setting immediate precedent.",
        isOptimal: false
      }
    ]
  },
  {
    id: 2,
    title: "Right to Privacy vs. National Security",
    description: "A journalist refuses to disclose their sources regarding government corruption, citing the Right to Privacy. The government demands the information, claiming national security concerns.",
    category: "Privacy Rights",
    constitutionalRef: "Article 21 (Right to Privacy) vs. Reasonable Restrictions",
    partyALabel: "Journalist's Position",
    partyA: "The journalist argues that source protection is fundamental to press freedom and investigative journalism, essential for democracy.",
    partyBLabel: "National Security Agency's Position",
    partyB: "The government claims the information leak has compromised national security operations and requires immediate disclosure.",
    additionalInfo: "Similar cases in other democracies have typically protected journalistic sources except in extreme national security situations.",
    decisions: [
      { 
        id: 1, 
        text: "Protect journalist's privacy rights absolutely", 
        points: 7, 
        feedback: "Strong protection of press freedom but might ignore legitimate security concerns.",
        impact: "Could potentially compromise genuine national security interests.",
        benefits: "An independent investigation would better balance both privacy and security needs.",
        isOptimal: false
      },
      { 
        id: 2, 
        text: "Order complete source disclosure", 
        points: 4, 
        feedback: "Too restrictive of press freedom and could deter future whistleblowers.",
        impact: "This might severely damage press freedom and future investigative journalism.",
        benefits: "An independent investigation would protect both journalistic integrity and security concerns.",
        isOptimal: false
      },
      { 
        id: 3, 
        text: "Suggest independent investigation", 
        points: 9, 
        feedback: "Excellent balance between privacy and security concerns!",
        impact: "This approach ensures thorough examination while protecting press freedom.",
        benefits: "This optimal solution maintains both national security and press freedom principles.",
        isOptimal: true
      },
      { 
        id: 4, 
        text: "Require partial disclosure of non-sensitive information", 
        points: 8, 
        feedback: "Good compromise that protects both interests.",
        impact: "Partial disclosure might still compromise source confidentiality.",
        benefits: "An independent investigation would provide better protection for all parties.",
        isOptimal: false
      },
      { 
        id: 5, 
        text: "Order in-camera review of sources", 
        points: 6, 
        feedback: "Moderate solution but might still deter future sources.",
        impact: "Could discourage future whistleblowers from coming forward.",
        benefits: "Independent investigation would better protect source confidentiality.",
        isOptimal: false
      },
      { 
        id: 6, 
        text: "Defer to press council guidelines", 
        points: 5, 
        feedback: "Avoids direct constitutional interpretation.",
        impact: "Might not adequately address the immediate security concerns.",
        benefits: "Independent investigation would provide more immediate and effective resolution.",
        isOptimal: false
      }
    ]
  },
  {
    id: 3,
    title: "Gender Equality vs. Religious Practices",
    description: "A woman is denied entry into a religious place due to traditional customs barring women of a certain age. She argues that it violates her right to equality.",
    category: "Religious Rights",
    constitutionalRef: "Article 14 (Right to Equality) vs. Article 25 (Right to Religion)",
    partyALabel: "Women's Rights Petitioner",
    partyA: "The petitioner argues that gender-based discrimination in religious practices violates constitutional equality.",
    partyBLabel: "Religious Institution's Position",
    partyB: "Religious authorities claim the practice is protected under religious freedom and is essential to their beliefs.",
    additionalInfo: "Similar cases have led to social reform in other religious institutions.",
    decisions: [
      { 
        id: 1, 
        text: "Allow immediate unrestricted entry", 
        points: 7, 
        feedback: "Progressive but might cause social tension.",
        impact: "Could lead to immediate social unrest and resistance.",
        benefits: "A gradual implementation would achieve the same goal with better acceptance.",
        isOptimal: false
      },
      { 
        id: 2, 
        text: "Uphold traditional customs completely", 
        points: 4, 
        feedback: "Perpetuates gender discrimination.",
        impact: "Continues discrimination and sets negative precedent for equality.",
        benefits: "Gradual changes would better serve both equality and religious harmony.",
        isOptimal: false
      },
      { 
        id: 3, 
        text: "Order gradual implementation of changes", 
        points: 9, 
        feedback: "Excellent balance between equality and social harmony!",
        impact: "This approach allows for systematic change while respecting religious sensitivities.",
        benefits: "This optimal solution promotes equality while maintaining social stability.",
        isOptimal: true
      },
      { 
        id: 4, 
        text: "Create separate but equal facilities", 
        points: 6, 
        feedback: "Maintains discrimination while appearing to compromise.",
        impact: "Perpetuates segregation under the guise of equality.",
        benefits: "Gradual integration would better serve true equality.",
        isOptimal: false
      },
      { 
        id: 5, 
        text: "Form religious-social committee for resolution", 
        points: 8, 
        feedback: "Good approach to involve stakeholders.",
        impact: "Might delay implementation of necessary changes.",
        benefits: "Gradual implementation would provide clearer timeline for change.",
        isOptimal: false
      },
      { 
        id: 6, 
        text: "Defer to religious authorities with conditions", 
        points: 5, 
        feedback: "Avoids direct confrontation but may delay justice.",
        impact: "Could result in minimal or no actual change.",
        benefits: "Gradual implementation would ensure actual progress.",
        isOptimal: false
      }
    ]
  },
  {
    id: 4,
    title: "Police Brutality vs. Law Enforcement",
    description: "A student protestor is allegedly beaten by the police during a peaceful protest. The police claim he was inciting violence, but video evidence suggests otherwise.",
    category: "Civil Rights",
    constitutionalRef: "Article 21 (Right to Life & Personal Liberty) vs. Article 22 (Protection Against Arrest & Detention)",
    partyALabel: "Student Protestor's Position",
    partyA: "The student and witnesses provide video evidence showing unprovoked police action during a peaceful demonstration.",
    partyBLabel: "Police Department's Position",
    partyB: "Police claim the video is selective and that the student was part of a group attempting to breach security barriers.",
    additionalInfo: "Medical reports confirm injuries consistent with the student's claims.",
    decisions: [
      { 
        id: 1, 
        text: "Order immediate police suspension", 
        points: 7, 
        feedback: "Swift action but might affect police morale.",
        impact: "Could lower police morale and create department tensions.",
        benefits: "An independent investigation would ensure fair process while maintaining accountability.",
        isOptimal: false
      },
      { 
        id: 2, 
        text: "Dismiss case citing police discretion", 
        points: 4, 
        feedback: "Ignores evidence and may encourage misconduct.",
        impact: "Could encourage future police misconduct and erode public trust.",
        benefits: "Independent investigation would better serve justice and institutional integrity.",
        isOptimal: false
      },
      { 
        id: 3, 
        text: "Order independent investigation", 
        points: 9, 
        feedback: "Excellent balance between justice and due process!",
        impact: "Ensures thorough examination while maintaining police authority.",
        benefits: "This optimal solution promotes accountability while respecting due process.",
        isOptimal: true
      },
      { 
        id: 4, 
        text: "Mandate police reform and compensation", 
        points: 8, 
        feedback: "Good systemic approach to address the issue.",
        impact: "Might be too broad without addressing specific incident.",
        benefits: "Independent investigation would better address both specific and systemic issues.",
        isOptimal: false
      },
      { 
        id: 5, 
        text: "Issue new protest guidelines", 
        points: 6, 
        feedback: "Addresses future cases but not current justice.",
        impact: "Fails to address the immediate case of alleged brutality.",
        benefits: "Independent investigation would address both current and future concerns.",
        isOptimal: false
      },
      { 
        id: 6, 
        text: "Refer to police complaints authority", 
        points: 5, 
        feedback: "May delay justice but follows procedure.",
        impact: "Could lead to prolonged investigation and delayed justice.",
        benefits: "Independent investigation would provide faster, more impartial resolution.",
        isOptimal: false
      }
    ]
  },
  {
    id: 5,
    title: "Right to Education vs. Private Institution Policies",
    description: "A poor but meritorious student is denied admission to a top private school due to financial reasons, despite the Right to Education Act.",
    category: "Education Rights",
    constitutionalRef: "Article 21A (Right to Education) vs. Article 19(1)(g) (Right of Private Institutions to Operate)",
    partyALabel: "Student's Family Position",
    partyA: "The student's family argues that merit should prevail over money, citing the fundamental right to education.",
    partyBLabel: "Private School's Position",
    partyB: "The school maintains its right to set fees to maintain educational standards and infrastructure.",
    additionalInfo: "The student has consistently ranked in the top 1% in previous academic achievements.",
    decisions: [
      { 
        id: 1, 
        text: "Force immediate admission", 
        points: 7, 
        feedback: "Supports education rights but might affect school autonomy.",
        impact: "Could strain school resources and set problematic precedent.",
        benefits: "Government scholarship would better balance rights of both parties.",
        isOptimal: false
      },
      { 
        id: 2, 
        text: "Uphold school's rejection", 
        points: 4, 
        feedback: "Prioritizes private rights over education access.",
        impact: "Denies opportunity to deserving student and reinforces inequality.",
        benefits: "Government scholarship would preserve both education access and school autonomy.",
        isOptimal: false
      },
      { 
        id: 3, 
        text: "Order government scholarship provision", 
        points: 9, 
        feedback: "Excellent solution that benefits all parties!",
        impact: "Ensures education access while respecting institutional autonomy.",
        benefits: "This optimal solution supports both educational rights and school sustainability.",
        isOptimal: true
      },
      { 
        id: 4, 
        text: "Mandate fee reduction policy", 
        points: 8, 
        feedback: "Good balance between access and sustainability.",
        impact: "Might affect school's financial planning and resources.",
        benefits: "Government scholarship would avoid financial burden on either party.",
        isOptimal: false
      },
      { 
        id: 5, 
        text: "Create public-private partnership", 
        points: 6, 
        feedback: "Creative but complex to implement.",
        impact: "Could lead to administrative complications and delays.",
        benefits: "Direct scholarship would provide immediate and clearer solution.",
        isOptimal: false
      },
      { 
        id: 6, 
        text: "Refer to education board", 
        points: 5, 
        feedback: "Procedural but may delay resolution.",
        impact: "Delays admission decision and creates uncertainty.",
        benefits: "Government scholarship would provide immediate resolution.",
        isOptimal: false
      }
    ]
  }
];

function App() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const handleCaseSelect = (case_: Case) => {
    setSelectedCase(case_);
    setSelectedDecision(null);
    setShowFeedback(false);
  };

  const handleDecisionSelect = (decision: Decision) => {
    setSelectedDecision(decision);
    setShowFeedback(true);
    setTotalPoints(prev => prev + decision.points);
  };

  const handleBack = () => {
    setSelectedCase(null);
    setSelectedDecision(null);
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-xl border-b border-yellow-500/20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-500/10 p-2 rounded-lg">
              <Scale className="h-8 w-8 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                Justice Simulator
              </h1>
              <p className="text-sm text-slate-400">Constitutional Court Division</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="bg-slate-800/50 border border-yellow-500/20 px-6 py-2 rounded-lg shadow-inner">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="text-yellow-500 font-bold">Score: {totalPoints}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/30 px-4 py-2 rounded-lg">
              <Gavel className="h-6 w-6 text-yellow-500" />
              <span className="font-semibold text-slate-300">High Court</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        {!selectedCase ? (
          <>
            <div className="flex items-center space-x-3 mb-8">
              <ScrollText className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-yellow-500">Pending Cases</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map((case_) => (
                <div 
                  key={case_.id}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      {case_.title}
                    </h3>
                    <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-medium border border-yellow-500/20">
                      {case_.category}
                    </span>
                  </div>
                  <p className="text-slate-300 line-clamp-3">{case_.description}</p>
                  <button 
                    onClick={() => handleCaseSelect(case_)}
                    className="mt-4 bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors flex items-center space-x-2 group"
                  >
                    <Shield className="h-4 w-4" />
                    <span>Review Case</span>
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <button 
                onClick={handleBack}
                className="flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Cases
              </button>
            </div>
            
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 border-b border-yellow-500/20 pb-4">
              {selectedCase.title}
            </h2>
            
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-yellow-400">Constitutional Reference</h3>
                </div>
                <p className="text-slate-300">{selectedCase.constitutionalRef}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-400">{selectedCase.partyALabel}</h3>
                  </div>
                  <p className="text-slate-300">{selectedCase.partyA}</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-red-500 mr-2" />
                    <h3 className="text-lg font-semibold text-red-400">{selectedCase.partyBLabel}</h3>
                  </div>
                  <p className="text-slate-300">{selectedCase.partyB}</p>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-yellow-400">Additional Information</h3>
                </div>
                <p className="text-slate-300">{selectedCase.additionalInfo}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Gavel className="h-5 w-5 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-yellow-500">Judicial Options</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCase.decisions.map((decision) => (
                    <button
                      key={decision.id}
                      onClick={() => !selectedDecision && handleDecisionSelect(decision)}
                      className={`p-4 rounded-lg text-left transition-all duration-300 ${
                        selectedDecision
                          ? decision === selectedDecision
                            ? 'bg-green-600 border-2 border-green-400'
                            : 'bg-slate-700/50 opacity-50 cursor-not-allowed'
                          : 'bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 hover:border-yellow-500/30'
                      }`}
                      disabled={!!selectedDecision}
                    >
                      {decision.text}
                    </button>
                  ))}
                </div>
              </div>

              {showFeedback && selectedDecision && (
                <div className="mt-6 space-y-4">
                  <div className={`p-6 rounded-lg border-2 ${
                    selectedDecision.isOptimal 
                      ? 'bg-green-900/30 border-green-500' 
                      : selectedDecision.points >= 7 
                        ? 'bg-yellow-900/30 border-yellow-500'
                        : 'bg-red-900/30 border-red-500'
                  }`}>
                    <div className="flex items-center mb-4">
                      {selectedDecision.isOptimal ? (
                        <Award className="h-6 w-6 text-yellow-300 mr-2" />
                      ) : (
                        <AlertTriangle className="h-6 w-6 text-yellow-300 mr-2" />
                      )}
                      <h4 className="text-xl font-semibold">Judicial Analysis</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700">
                        <h5 className="font-semibold text-yellow-400 mb-2">Court's Opinion</h5>
                        <p>{selectedDecision.feedback}</p>
                      </div>
                      <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700">
                        <h5 className="font-semibold text-yellow-400 mb-2">Societal Impact</h5>
                        <p>{selectedDecision.impact}</p>
                      </div>
                      {!selectedDecision.isOptimal && (
                        <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700">
                          <h5 className="font-semibold text-yellow-400 mb-2">Optimal Resolution</h5>
                          <p>{selectedDecision.benefits}</p>
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                        <span className="text-sm text-slate-400">Decision Score</span>
                        <span className="text-xl font-bold text-yellow-400">{selectedDecision.points} points</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;