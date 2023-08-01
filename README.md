# cs361 microservice for partner

This program is to filter car brand and car tires by first letter.
For Example input in csv files :
T
H<br>
<img width="220" alt="image" src="https://github.com/yangcan1/cs361/assets/107888129/2f9e10a6-d57b-4211-a87a-bc52828aaadb">

=> Result will shown 
Brands starting with letter 'T': ['Toyota']
Tires starting with letter 'T': ['Toyo Tires']
Brands starting with letter 'H': ['Honda']
Tires starting with letter 'H': ['Hankook']<br>
<img width="502" alt="image" src="https://github.com/yangcan1/cs361/assets/107888129/9069455b-4a4a-403c-9919-d65167952de0">


<=> The CSV files only take input as one letter each line, do not have to be capitalized

## Communication Contract
1. How to request data
Create a csv files with [nameyouwanted.csv] that places in the same directories with the filter program
enter any letter but only one letter each line
run the program -> python3 main.py [nameyouwanted.csv]

2. How to receive data
If request data are success, the result will out put as output.txt files
It will be placed same directories with the program.

## UML sequence diagram:

![image](https://github.com/yangcan1/cs361/assets/107888129/b9043fcb-1dde-4544-a9e8-039f517c35f5)



