#!/bin/bash

### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'trybe-publisher' fornecido 
## pela Trybe. 

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path coverage \
    --path evaluator \
    --path cypress \
    --path tests/average.spec.js \
    --path tests/circle.js \
    --path tests/createStudent.spec.js \
    --path tests/getCharacter.js \
    --path tests/myCounter.spec.js \
    --path tests/numbers.js \
    --path tests/objPlayground.spec.js \
    --path tests/productDetails.js \
    --path tests/restaurant.js \
    --path tests/vqv.spec.js \
    --path img \
    --path README.md \
    --invert-paths --force --quiet