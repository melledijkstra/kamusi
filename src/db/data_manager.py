import json
import os

print(os.listdir())

with open('swahili-by-exercise.json') as fp:
    data = json.load(fp)

newdata = dict()
for exercise in data:
    print(exercise)
    for lexem in data[exercise]:
        if 'word' not in lexem:
            continue
        word = lexem["word"]        
        print(f'\t{word}')
        lexem['exercise'] = exercise
        newdata[word] = lexem

with open('swahili-by-word.json', 'w') as fp:
    json.dump(newdata, fp)

