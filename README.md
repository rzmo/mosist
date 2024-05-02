# MOSIST
Mosist, i.e. "Most Similar String" is a utility code snippet I use personally, utilising levenshtein distance calculations to find the most realistically 'intentional' input from a user based on possible inputs (through the provided array).
Levenshtein distance function provides a 0 - 1 float result, where 1 is equivalence.

## Versions
Versions of the snippet can be found for either Python or JavaScript.

## My Usage
Used to improve UX through handling misspellings and the likes forgivingly. Typically use the levenshtein distance function, called using the result of the mosist function to determine whether it will assume the user's input, or ask again based on a pre-determined threshold value.

## License
MIT License
