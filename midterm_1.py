# 8 - '케빈 코스트너 최고의 영화. 원주민인 인디언의 아픔을 제대로 짚어보기 시작한 영화사적 의미도 상당하다. 아직 백인의 시선을 완전히 거둘수 없던 점이 안타깝지만, 나에겐 3시간의 상영시간이 전혀 길게 느껴지지 않을 명작이다.

str = '8 - 케빈 코스트너 최고의 영화. 원주민인 인디언의 아픔을 제대로 짚어보기 시작한 영화사적 의미도 상당하다. 아직 백인의 시선을 완전히 거둘수 없던 점이 안타깝지만, 나에겐 3시간의 상영시간이 전혀 길게 느껴지지 않을 명작이다.'

# strip 메소드를 사용하여 문자열에서 평점 제거

str2 = str.strip('8')

# replace 메소드를 사용하여 특수 기호인 (.) , (,) , (-) , ('영화, 점이, 나에겐') 을 제거한다.

str2 = str2.replace('.', '').replace(',', '').replace('-', '').replace('영화', '').replace('점이', '').replace('나에겐', '')

# split 메소드를 사용하여 문자열을 공백문자 기준으로 분할한다.

str2 = str2.split()

# join 메소드를 사용하여 분리된 단어들을 쉼표(,)를 구분자로 연결된 csv 형태의 문자열로 결합하여 출력

str2 = ','.join(str2)
