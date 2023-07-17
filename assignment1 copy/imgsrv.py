import time

while True:
    time.sleep(1)

    f = open("./image-service.txt", "r+")
    context = f.readline()
    f.close()
    if context.isdigit():
        imgNum = int(context) % 151
        if (0 < imgNum < 10):
            imgPath = "pics/00%d.jpg" % imgNum
        elif (9 < imgNum < 100):
            imgPath = "pics/0%d.jpg" % imgNum
        else:
            imgPath = "pics/%d.jpg" % imgNum

        f = open("./image-service.txt", "r+")
        f.write(imgPath)
        f.close()
