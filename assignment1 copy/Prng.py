import random
import time


while True:
    time.sleep(1)

    f = open("prng-service.txt", "r+")
    fd = f.read()
    if (fd == 'run'):
        f.seek(0)
        f.truncate()
        num = str(random.randint(0, 1000))
        f.write(num)


    f.close

