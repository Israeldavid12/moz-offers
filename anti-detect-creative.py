# pixelate_video.py — pixeliza rostos em vídeo (anonimização)
import cv2

input_path = "teste.mp4"
output_path = "saida_pixelada.mp4"
block = 15  # quanto maior, mais forte a pixelização

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
cap = cv2.VideoCapture(input_path)
fourcc = cv2.VideoWriter_fourcc(*"mp4v")
fps = cap.get(cv2.CAP_PROP_FPS) or 25.0
w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
out = cv2.VideoWriter(output_path, fourcc, fps, (w, h))

while True:
    ret, frame = cap.read()
    if not ret:
        break
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30,30))
    for (x, y, fw, fh) in faces:
        face = frame[y:y+fh, x:x+fw]
        # reduzir e ampliar para pixelizar
        small = cv2.resize(face, (max(1, fw//block), max(1, fh//block)), interpolation=cv2.INTER_LINEAR)
        pixelated = cv2.resize(small, (fw, fh), interpolation=cv2.INTER_NEAREST)
        frame[y:y+fh, x:x+fw] = pixelated
    out.write(frame)

cap.release()
out.release()
print("Processamento concluído — saída:", output_path)
