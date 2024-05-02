def levenshtein_similarity(str1, str2):
    len1 = len(str1)
    len2 = len(str2)
    
    if len1 == 0 and len2 == 0:
        return 1.0
    
    distance = [[0] * (len2 + 1) for _ in range(len1 + 1)]
    
    for i in range(len1 + 1):
        for j in range(len2 + 1):
            if i == 0:
                distance[i][j] = j
            elif j == 0:
                distance[i][j] = i
            elif str1[i - 1] == str2[j - 1]:
                distance[i][j] = distance[i - 1][j - 1]
            else:
                distance[i][j] = 1 + min(distance[i - 1][j], distance[i][j - 1], distance[i - 1][j - 1])
    
    max_len = max(len1, len2)
    similarity = (max_len - distance[len1][len2]) / max_len
    return similarity


def mosist(input_str, array_of_strings):
    max_similarity = -1
    most_similar = None
    
    for string in array_of_strings:
        similarity = levenshtein_similarity(input_str, string)
        if similarity > max_similarity:
            max_similarity = similarity
            most_similar = string
    
    return most_similar
