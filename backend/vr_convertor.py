from moviepy.editor import VideoFileClip, clips_array

def vr_convertor(input_video, output_video):
    clip = VideoFileClip(input_video)
    side_by_side = clips_array([[clip, clip]])
    final_clip = side_by_side.resize(height=1080)
    final_clip.write_videofile(output_video, codec='libx264')
    return output_video