from deepface import DeepFace
from cv2 import cv2
import matplotlib.pyplot as plt

img1=cv2.imread('C:\\Users\\Jamel\\Pictures\\Camera Roll\\WIN_20210405_10_38_32_Pro.jpg')
plt.imshow(img1[:,:,::-1])
plt.show()
#C:\\Users\\Jamel\\Pictures\\Camera Roll\\WIN_20210214_16_02_12_Pro.jpg
img2=cv2.imread('C:\\Users\\Jamel\\Pictures\\Camera Roll\\WIN_20210405_10_38_32_Pro.jpg')
plt.imshow(img2[:,:,::-1])
plt.show()

result= DeepFace.verify(img1,img2)

print(result['verified'])