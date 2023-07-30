# cs361

# communication contract
Men: [Minutes working out] × [Bodyweight in kg] × 0.0713. <br>
Women: [Minutes working out] × [Bodyweight in kg] × 0.0637.<br> <br>
.csv file contains the exercise data including total duration, body weight and your sex. The program can help you to calculate the correct calories consuming during the workout based on your sex and your weight. After running the program, the program will output an .csv file which contains the calories you consumed.


## REQUEST data:
1. Create an .csv file which contains your sex(1 for male, 2 for female), exercise duration(in minutes), and your bodyweight (in kg).
2. Program running.
3. Output an .csv file which contains the result of your calories consumed.


**Example call:** `python3 microservice.py input.csv`<br>
After running, the program will generate a output.txt which contains the data of extimated calories comsumming. 
<img width="450" alt="image" src="https://github.com/yangcan1/cs361/assets/107888129/0605d5e0-576b-48e3-8142-8f1df805bc0c">


## RECEIVE data:
After successfully running the program, the program will output an .csv file as your result of calories consumed. The output file will be located under the same directory.
## UML sequence diagram:
![ezcv logo](https://github.com/yangcan1/cs361/blob/main/UML%20image.png)

