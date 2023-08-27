from PIL import Image 
import time

while True:
    userInput = int(input("Please enter 1 to generate a new image or 2 to exit: "))
    
    if userInput == 1:
        #get random number
        f = open("prng-service.txt", "w")
        f.write("run")
        f.close()
        time.sleep(5)
        f = open("prng-service.txt", "r")
        randNum = f.readline()
        # print(randNum)
        f.close()

        #input the random number to image-service.txt
        f = open("image-service.txt", "w")
        f.write(randNum)
        f.close()
        time.sleep(5)

        #get image address
        f = open("image-service.txt", "r")
        imgPath = f.readline()
        f.close()

        # show the image
        img = Image.open(imgPath)
        img.show()

    elif userInput == 2:
        exit()
    
    else:
        print("unknown option")