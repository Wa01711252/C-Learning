
import { NavigationPath } from './types.js';

export const APP_TITLE = "C言語学習ドリル";

export const CHAPTER_TITLES = {
  'ch1': '第1章: printf関数による文字列の表示',
  'ch2': '第2章: int変数の定義と変数の表示',
  'ch3': '第3章: int, double型の二種類の変数を用いた適切な計算と表示',
  'ch4': '第4章: 型キャストによる変数型の変換',
  'ch5': '第5章: scanfを用いた変数への入力と代入',
  'ch6': '第6章: if文と関係演算子を用いた条件分岐',
  'ch7': '第7章: switch文を用いた条件分岐',
  'ch8': '第8章: for文を用いた繰り返し',
  'ch9': '第9章: while文やdo-while文を用いた繰り返し',
};

export const PRACTICE_PROBLEMS = [
  // --- 第1章: printf関数による文字列の表示 ---
  {
    id: 'ch1-printf-easy-helloworld',
    title: '1-Easy: Hello World!',
    description: '`printf` 関数を使用して、コンソールに "Hello World!" と表示するプログラムを作成してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  // ここにコードを書いてください\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  printf("Hello World!\\n");\n  return 0;\n}',
    explanation: '`printf` は書式付き文字列を標準出力に出力する関数です。文字列リテラルを引用符で囲み、末尾に改行文字 `\\n` を加えることで、表示後にカーソルが次の行に移動します。`stdio.h` ヘッダファイルに関数の宣言が含まれています。'
  },
  {
    id: 'ch1-printf-medium-multiline',
    title: '1-Medium: 複数行のメッセージ',
    description: '`printf` 関数を複数回使用するか、1回の `printf` 関数呼び出しの中で複数の改行文字 `\\n` を使用して、以下の3行のメッセージをコンソールに表示してください。\n\nC Programming\nis Fun!\nLet\'s learn.',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  // ここにコードを書いてください\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  printf("C Programming\\n");\n  printf("is Fun!\\n");\n  printf("Let\'s learn.\\n");\n  // または1行で: printf("C Programming\\n_is Fun!\\n_Let\'s learn.\\n"); を使用することも可能です。 (マークダウンの都合上 _ を入れていますが実際は不要)\n  return 0;\n}',
    explanation: '`printf` を複数回呼び出すか、一つの `printf` 文内で文字列中に `\\n` (改行文字) を含めることで複数行の出力が可能です。アポストロフィを表示するには `\\\'` のようにエスケープシーケンスを使用します。'
  },
  {
    id: 'ch1-printf-hard-asciiart',
    title: '1-Hard: 簡単なASCIIアート',
    description: '`printf` 関数のみを使用して、簡単な顔のASCIIアートをコンソールに表示してください。例:\n  *****\n *     *\n*  o o  *\n*   ^   *\n *  -  *\n  *****',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  // ここにコードを書いてください\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  printf("  *****  \\n");\n  printf(" *     * \\n");\n  printf("*  o o  *\\n");\n  printf("*   ^   *\\n");\n  printf(" *  -  * \\n");\n  printf("  *****  \\n");\n  return 0;\n}',
    explanation: '複数の `printf` 文を使い、各行の文字を正確に配置することでASCIIアートを作成します。文字の位置合わせにはスペースをうまく使うことがポイントです。特殊文字（例: `*`）はそのまま表示できます。'
  },

  // --- 第2章: int変数の定義と変数の表示 ---
  {
    id: 'ch2-intvar-easy-defineprint',
    title: '2-Easy: int変数の定義と表示',
    description: '`int` 型の変数 `age` を宣言し、あなたの年齢を代入してください。その後、`printf` 関数を使って "My age is: [年齢]" の形式で表示してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  // ここにint型変数 age を宣言し、値を代入\n\n  // printfで age を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int age = 25; // 例として25歳を代入\n  printf("My age is: %d\\n", age);\n  return 0;\n}',
    explanation: '`int age;` で整数型変数を宣言し、`age = 25;` で値を代入します。または `int age = 25;` と宣言と同時に初期化もできます。`printf` で整数値を表示するには、書式指定子 `%d` を使用し、対応する変数を後ろに記述します。'
  },
  {
    id: 'ch2-intvar-medium-sumvars',
    title: '2-Medium: 複数のint変数と簡単な計算',
    description: '`int` 型の変数 `num1` と `num2` を宣言し、それぞれ 10 と 20 を代入してください。次に、これらの合計を計算して別の `int` 型変数 `sum_val` に格納し、"10 + 20 = 30" の形式で表示してください。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int num1;\n  int num2;\n  int sum_val;\n\n  // num1 と num2 に値を代入し、合計を sum_val に計算\n\n  // 結果を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int num1 = 10;\n  int num2 = 20;\n  int sum_val = num1 + num2;\n\n  printf("%d + %d = %d\\n", num1, num2, sum_val);\n  return 0;\n}',
    explanation: '複数の変数を宣言し、算術演算子 `+` を使って合計を計算します。`printf` で複数の変数の値を表示するには、それぞれの値に対応する書式指定子 (`%d`) を文字列中に配置し、引数として変数を順番に指定します。'
  },
  {
    id: 'ch2-intvar-hard-average',
    title: '2-Hard: 3つのint変数の平均値（整数）',
    description: '`int` 型の変数 `score1`, `score2`, `score3` を宣言し、それぞれ 70, 85, 90 を代入してください。これらの平均値を計算し（結果も整数型とする）、"Scores: 70, 85, 90. Average: [平均値]" の形式で表示してください。',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int score1, score2, score3;\n  int average;\n\n  // 点数を代入し、平均値を計算（整数）\n\n  // 結果を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int score1 = 70;\n  int score2 = 85;\n  int score3 = 90;\n  int average = (score1 + score2 + score3) / 3;\n\n  printf("Scores: %d, %d, %d. Average: %d\\n", score1, score2, score3, average);\n  return 0;\n}',
    explanation: '3つの整数を加算し、3で割ることで平均値を求めます。整数同士の除算は、結果も整数（小数点以下切り捨て）になることに注意してください。`printf` で複数の値を表示する方法は前問と同様です。'
  },

  // --- 第3章: int, double型の変数を用いた計算と表示 ---
  {
    id: 'ch3-typescalc-easy-defineprint',
    title: '3-Easy: int型とdouble型の定義と表示',
    description: '`int` 型の変数 `item_count` に 5 を、`double` 型の変数 `price_per_item` に 19.99 を代入してください。その後、それぞれの値を適切な書式指定子を用いて表示してください。\n例:\nItem count: 5\nPrice per item: 19.99',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int item_count;\n  double price_per_item;\n\n  // 変数に値を代入\n\n  // printfで値を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int item_count = 5;\n  double price_per_item = 19.99;\n\n  printf("Item count: %d\\n", item_count);\n  printf("Price per item: %.2f\\n", price_per_item);\n  return 0;\n}',
    explanation: '`double` 型は浮動小数点数を格納するために使用します。`printf` で `double` 型の値を表示するには、書式指定子 `%f` を使用します。`%.2f` のようにすると小数点以下2桁で表示できます。'
  },
  {
    id: 'ch3-typescalc-medium-rectanglearea',
    title: '3-Medium: 長方形の面積計算',
    description: '長方形の縦の長さ `height` (int型、値: 7) と横の長さ `width` (double型、値: 12.5) を定義してください。これらの積を計算して面積 `area` (double型) を求め、"Rectangle area: [面積]" の形式で小数点以下2桁まで表示してください。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int height = 7;\n  double width = 12.5;\n  double area;\n\n  // 面積を計算\n\n  // 結果を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int height = 7;\n  double width = 12.5;\n  double area = height * width;\n\n  printf("Rectangle area: %.2f\\n", area);\n  return 0;\n}',
    explanation: '`int` 型と `double` 型の変数を掛け算する場合、結果はより表現範囲の広い `double` 型になります。計算結果を `double` 型の変数に格納し、`%.2f` を用いて表示します。'
  },
  {
    id: 'ch3-typescalc-hard-compoundinterest',
    title: '3-Hard: 簡単な利息計算',
    description: '元金 `principal` (int型、値: 100000)、年利率 `rate` (double型、値: 0.05、つまり5%)、年数 `years` (int型、値: 3) を定義してください。単利計算（元金 × 利率 × 年数）で利息 `interest` (double型) を求め、元金、利率、年数、計算された利息をそれぞれ分かりやすく表示してください。利率はパーセント表示 (例: 5.00%) で表示してください。',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int principal = 100000;\n  double rate = 0.05;\n  int years = 3;\n  double interest;\n\n  // 利息を計算\n\n  // 結果を表示\n  printf("Principal: %d JPY\\n", principal);\n  //利率をパーセントで表示\n  //年数を表示\n  //利息を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int principal = 100000;\n  double rate = 0.05;\n  int years = 3;\n  double interest = principal * rate * years;\n\n  printf("Principal: %d JPY\\n", principal);\n  printf("Annual rate: %.2f%%\\n", rate * 100.0); // %を表示するには %% とする\n  printf("Years: %d\\n", years);\n  printf("Simple Interest: %.2f JPY\\n", interest);\n  return 0;\n}',
    explanation: '単利の計算式は `元金 * 利率 * 年数` です。`int` 型と `double` 型が混在する計算では、結果は `double` 型になります。利率をパーセントで表示するには、`rate` に100.0を掛けて `%.2f%%` という書式指定子を使います (`%%` で `%` 文字自体を表示)。'
  },

  // --- 第4章: 型キャストによる変数型の変換 ---
  {
    id: 'ch4-typecast-easy-intdivtodouble',
    title: '4-Easy: 整数除算から浮動小数点結果へ',
    description: '`int` 型の変数 `a = 7` と `b = 2` を定義してください。`a / b` の結果を `double` 型の変数 `result` に代入し、小数点以下も含めて正確に表示してください (期待値: 3.5)。型キャストを使用してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int a = 7;\n  int b = 2;\n  double result;\n\n  // a / b を計算し、resultに代入。型キャストを使用。\n\n  printf("Result of 7 / 2: %.1f\\n", result);\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int a = 7;\n  int b = 2;\n  double result = (double)a / b; // または a / (double)b または (double)a / (double)b\n\n  printf("Result of 7 / 2: %.1f\\n", result);\n  return 0;\n}',
    explanation: '`int` 同士の除算 `a / b` は結果が整数（この場合は3）になります。小数点以下を保持するには、除算が行われる前にオペランドの少なくとも一方を `double` 型にキャストします。`(double)a` とすると `a` の値が一時的に `double` として扱われ、`double` 型と `int` 型の除算となり、結果は `double` 型になります。'
  },
  {
    id: 'ch4-typecast-medium-averageofscores',
    title: '4-Medium: 3つの整数スコアの正確な平均値',
    description: '3つの `int` 型のテストスコア `score1 = 80`, `score2 = 75`, `score3 = 92` があります。これらの平均点を計算し、`double` 型の変数 `average_score` に代入してください。結果は小数点以下2桁で表示してください。型キャストを適切に使用して正確な平均値を求めてください。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int score1 = 80;\n  int score2 = 75;\n  int score3 = 92;\n  double average_score;\n\n  // 平均点を計算し、average_score に代入。\n\n  printf("Average score: %.2f\\n", average_score);\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int score1 = 80;\n  int score2 = 75;\n  int score3 = 92;\n  double average_score = (double)(score1 + score2 + score3) / 3.0; // または / 3 でも良い (分子がdoubleのため)\n\n  printf("Average score: %.2f\\n", average_score);\n  return 0;\n}',
    explanation: '合計 `(score1 + score2 + score3)` は `int` 型です。この合計を `int` 型の `3` で割ると結果が整数になってしまいます。正確な平均を得るには、合計を `double` にキャストするか、除数を `3.0` (double型リテラル) にします。ここでは `(double)(score1 + score2 + score3)` とすることで、合計値が `double` に変換されてから除算が行われます。'
  },
  {
    id: 'ch4-typecast-hard-tempconversion',
    title: '4-Hard: 温度変換と整数部表示',
    description: '摂氏温度 `celsius` (`double` 型、値: 25.7) を華氏温度 `fahrenheit` (`double` 型) に変換するプログラムを作成してください。変換式は `F = C * 9/5 + 32` です。`celsius` は小数点1桁まで、`fahrenheit` は計算結果を小数点1桁まで表示し、さらに `fahrenheit` の整数部分のみを別途表示してください（型キャスト使用）。',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  double celsius = 25.7;\n  double fahrenheit;\n  int fahrenheit_int;\n\n  // 華氏に変換\n  // fahrenheit_int に華氏の整数部分を代入\n\n  printf("Celsius: %.1f C\\n", celsius);\n  printf("Fahrenheit: %.1f F\\n", fahrenheit);\n  printf("Fahrenheit (integer part): %d F\\n", fahrenheit_int);\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  double celsius = 25.7;\n  double fahrenheit = celsius * 9.0 / 5.0 + 32.0; // 9.0/5.0で浮動小数点除算を保証\n  int fahrenheit_int = (int)fahrenheit; // doubleからintへキャスト（小数点以下切り捨て）\n\n  printf("Celsius: %.1f C\\n", celsius);\n  printf("Fahrenheit: %.1f F\\n", fahrenheit);\n  printf("Fahrenheit (integer part): %d F\\n", fahrenheit_int);\n  return 0;\n}',
    explanation: '変換式 `C * 9/5 + 32` で `9/5` をそのまま書くと整数除算で `1` となってしまうため、`9.0/5.0` のように浮動小数点数リテラルを使います。`double` 型の `fahrenheit` から整数部分を取り出すには、`(int)fahrenheit` と型キャストします。これにより小数点以下が切り捨てられます。'
  },

  // --- 第5章: scanfを用いた変数への入力と代入 ---
  {
    id: 'ch5-scanf-easy-inputage',
    title: '5-Easy: 年齢の入力と表示',
    description: 'ユーザーに年齢を尋ね、「何歳ですか？ 」と表示した後、整数を入力させ、その年齢を `int` 型変数に格納してください。その後、「あなたは [入力された年齢] 歳です。」と表示してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int age;\n  printf("何歳ですか？ ");\n  // ここにscanfを使って年齢を入力させるコード\n\n  // ここに結果を表示するコード\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int age;\n  printf("何歳ですか？ ");\n  scanf("%d", &age);\n  printf("あなたは %d 歳です。\\n", age);\n  return 0;\n}',
    explanation: '`scanf` 関数は、書式指定子に従って標準入力からデータを読み込み、指定されたメモリアドレスに格納します。整数を読み込む場合は書式指定子 `%d` を使い、変数のアドレスを渡すために変数名の前に `&` (アドレス演算子) を付けます (`&age`)。'
  },
  {
    id: 'ch5-scanf-medium-sumtwointegers',
    title: '5-Medium: 2つの整数の入力と合計',
    description: 'ユーザーに2つの整数を入力するように促し（例: "Enter two integers separated by space: "）、入力された2つの整数をそれぞれ `int` 型変数 `num1`, `num2` に格納してください。その後、これらの合計を計算し、「Sum: [合計値]」と表示してください。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int num1, num2, sum;\n  printf("Enter two integers separated by space: ");\n  // ここにscanfを使って2つの整数を入力させるコード\n\n  // 合計を計算\n  // 結果を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int num1, num2, sum;\n  printf("Enter two integers separated by space: ");\n  scanf("%d %d", &num1, &num2);\n  sum = num1 + num2;\n  printf("Sum: %d\\n", sum);\n  return 0;\n}',
    explanation: '`scanf` で複数の値を一度に読み込むには、書式指定子をスペースで区切って並べ、対応する変数のアドレスを順番に指定します (`scanf("%d %d", &num1, &num2);`)。ユーザーは入力時に値をスペース、タブ、または改行で区切って入力します。'
  },
  {
    id: 'ch5-scanf-hard-circlecalc',
    title: '5-Hard: 円の半径入力と面積・円周計算',
    description: 'ユーザーに円の半径 (`double` 型) を入力するように促し（例: "Enter radius of circle: "）、入力値を格納してください。その後、その円の面積と円周を計算し、それぞれ小数点以下2桁で表示してください。円周率πは `3.14159` を使用してください。\n面積 = π * 半径 * 半径\n円周 = 2 * π * 半径',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  double radius, area, circumference;\n  const double PI = 3.14159;\n  printf("Enter radius of circle: ");\n  // scanfで半径を入力\n\n  // 面積と円周を計算\n\n  // 結果を表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  double radius, area, circumference;\n  const double PI = 3.14159;\n  printf("Enter radius of circle: ");\n  scanf("%lf", &radius); // double型の場合は %lf を使用\n\n  area = PI * radius * radius;\n  circumference = 2 * PI * radius;\n\n  printf("Area: %.2f\\n", area);\n  printf("Circumference: %.2f\\n", circumference);\n  return 0;\n}',
    explanation: '`scanf` で `double` 型の値を読み込む場合、書式指定子は `%lf` を使用します（`printf` では `%f` を使いますが、`scanf` では `%lf` が一般的です）。`const double PI = 3.14159;` のように `const` を使うと、プログラム中で値が変更されない定数を定義できます。'
  },

  // --- 第6章: if文と関係演算子を用いた条件分岐 ---
  {
    id: 'ch6-if-easy-posnezero',
    title: '6-Easy: 正・負・ゼロの判定',
    description: 'ユーザーに整数を入力させ、その数が正 (`Positive`)、負 (`Negative`)、またはゼロ (`Zero`) であるかを判定し、結果を表示してください。`if-else if-else` 構文を使用してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int num;\n  printf("Enter an integer: ");\n  scanf("%d", &num);\n\n  // if-else if-else で判定し結果を表示\n\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int num;\n  printf("Enter an integer: ");\n  scanf("%d", &num);\n\n  if (num > 0) {\n    printf("Positive\\n");\n  } else if (num < 0) {\n    printf("Negative\\n");\n  } else {\n    printf("Zero\\n");\n  }\n  return 0;\n}',
    explanation: '`if (条件式)` で条件が真の場合に続くブロックが実行されます。`else if (別の条件式)` で前の `if` や `else if` の条件が偽で、かつこの条件式が真の場合に実行されます。`else` はそれまでのどの条件も満たさなかった場合に実行されます。関係演算子 `>` (より大きい) や `<` (より小さい) を使用します。'
  },
  {
    id: 'ch6-if-medium-passfail',
    title: '6-Medium: 合格・不合格判定',
    description: 'ユーザーにテストの点数（0～100の整数）を入力させ、点数が60点以上なら "Pass"、それ未満なら "Fail" と表示してください。点数が0未満または100を超える場合は "Invalid score" と表示してください。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int score;\n  printf("Enter score (0-100): ");\n  scanf("%d", &score);\n\n  // if文で判定し結果を表示\n\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int score;\n  printf("Enter score (0-100): ");\n  scanf("%d", &score);\n\n  if (score < 0 || score > 100) { // 論理OR演算子 ||\n    printf("Invalid score\\n");\n  } else if (score >= 60) { // 関係演算子 >=\n    printf("Pass\\n");\n  } else {\n    printf("Fail\\n");\n  }\n  return 0;\n}',
    explanation: '複数の条件を組み合わせるために、まず入力値の有効範囲をチェックします。`score < 0 || score > 100` は「scoreが0未満 または scoreが100より大きい」という意味です（`||` は論理OR）。有効な点数の場合、次に60点以上かどうかで合格/不合格を判定します。`>=` は「以上」を表す関係演算子です。'
  },
  {
    id: 'ch6-if-hard-largestofthree',
    title: '6-Hard: 3つの整数の最大値',
    description: 'ユーザーに3つの異なる整数を入力させ、その中で最大の数を見つけて表示してください。複数の `if` 文や論理演算子 `&&` (論理AND) を使用して実装できます。',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int a, b, c;\n  printf("Enter three different integers: ");\n  scanf("%d %d %d", &a, &b, &c);\n  int max_val;\n\n  // if文を使って最大の数を見つけ max_val に代入\n\n  printf("The largest number is: %d\\n", max_val);\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int a, b, c;\n  printf("Enter three different integers: ");\n  scanf("%d %d %d", &a, &b, &c);\n  int max_val;\n\n  if (a > b && a > c) { // aがbより大きく、かつ、aがcより大きい\n    max_val = a;\n  } else if (b > a && b > c) { // bがaより大きく、かつ、bがcより大きい\n    max_val = b;\n  } else {\n    max_val = c; // 上記以外ならcが最大（または等しい数が複数ある場合）\n  }\n\n  printf("The largest number is: %d\\n", max_val);\n  return 0;\n}',
    explanation: '`a` が最大である条件は `a > b` かつ `a > c` です。これを論理AND演算子 `&&` を使って `a > b && a > c` と表現します。同様に `b` が最大である条件も記述し、どちらでもなければ `c` が最大となります。（入力は「異なる整数」と仮定していますが、等しい場合の考慮も解答例では暗黙的にされています。）'
  },

  // --- 第7章: switch文を用いた条件分岐 ---
  {
    id: 'ch7-switch-easy-dayofweek',
    title: '7-Easy: 簡単な曜日表示',
    description: 'ユーザーに1から3の整数を入力させ、1なら "Monday"、2なら "Tuesday"、3なら "Wednesday"、それ以外の数値なら "Invalid day number" と表示するプログラムを `switch` 文を使って作成してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int day_num;\n  printf("Enter a day number (1-3): ");\n  scanf("%d", &day_num);\n\n  // switch文で曜日を表示\n\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int day_num;\n  printf("Enter a day number (1-3): ");\n  scanf("%d", &day_num);\n\n  switch (day_num) {\n    case 1:\n      printf("Monday\\n");\n      break; // breakを忘れないこと\n    case 2:\n      printf("Tuesday\\n");\n      break;\n    case 3:\n      printf("Wednesday\\n");\n      break;\n    default: // どのcaseにも一致しない場合\n      printf("Invalid day number\\n");\n      break;\n  }\n  return 0;\n}',
    explanation: '`switch (式)` の式の結果（ここでは `day_num` の値）と一致する `case 定数:` に処理がジャンプします。各 `case` ブロックの最後には `break;` を記述し、`switch` 文を抜けるようにします。`break` がないと、後続の `case` の処理も実行されてしまいます（フォールスルー）。`default:` はどの `case` にも一致しなかった場合に実行されます。'
  },
  {
    id: 'ch7-switch-medium-simplecalculator',
    title: '7-Medium: 簡単な電卓',
    description: 'ユーザーに2つの `double` 型の数値と、1つの演算子文字（`+`, `-`, `*`, `/` のいずれか）を入力させます。`switch` 文を使って選択された演算子に応じた計算を行い、結果を表示してください。ゼロ除算の場合はエラーメッセージを表示してください。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  double num1, num2, result;\n  char operator_char;\n\n  printf("Enter first number: ");\n  scanf("%lf", &num1);\n  printf("Enter operator (+, -, *, /): ");\n  scanf(" %c", &operator_char); // %cの前のスペースに注意\n  printf("Enter second number: ");\n  scanf("%lf", &num2);\n\n  // switch文で計算し結果を表示\n\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  double num1, num2, result;\n  char operator_char;\n\n  printf("Enter first number: ");\n  scanf("%lf", &num1);\n  printf("Enter operator (+, -, *, /): ");\n  scanf(" %c", &operator_char); // %cの前にスペースを入れて改行文字などを読み飛ばす\n  printf("Enter second number: ");\n  scanf("%lf", &num2);\n\n  int valid_operator = 1;\n\n  switch (operator_char) {\n    case \'+\':\n      result = num1 + num2;\n      break;\n    case \'-\':\n      result = num1 - num2;\n      break;\n    case \'*\':\n      result = num1 * num2;\n      break;\n    case \'/\':\n      if (num2 == 0) {\n        printf("Error: Division by zero!\\n");\n        valid_operator = 0;\n      } else {\n        result = num1 / num2;\n      }\n      break;\n    default:\n      printf("Error: Invalid operator!\\n");\n      valid_operator = 0;\n      break;\n  }\n\n  if (valid_operator) {\n      printf("Result: %.2f\\n", result);\n  }\n  return 0;\n}',
    explanation: '`switch` 文は文字型 (`char`) の値でも使用できます。`case \'+\':` のように文字リテラルを指定します。`scanf(" %c", &operator_char);` の `%c` の前にあるスペースは、前の `scanf` で入力バッファに残った改行文字などを読み飛ばし、意図した文字を正しく読み込むために重要です。ゼロ除算のチェックは `/` の `case` 内で行います。'
  },
  {
    id: 'ch7-switch-hard-daysinmonth',
    title: '7-Hard: 月の日数表示（うるう年非考慮）',
    description: 'ユーザーに月を表す整数（1～12）を入力させ、その月の日数を表示するプログラムを `switch` 文を使って作成してください。うるう年は考慮せず、2月は28日とします。複数の `case` をまとめることも活用してください。無効な月の場合はエラーメッセージを表示します。',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int month;\n  printf("Enter month number (1-12): ");\n  scanf("%d", &month);\n\n  // switch文で月の日数を表示\n\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int month, days;\n  printf("Enter month number (1-12): ");\n  scanf("%d", &month);\n\n  switch (month) {\n    case 1:\ case 3:\ case 5:\ case 7:\ case 8:\ case 10:\ case 12:\n      days = 31;\n      break;\n    case 4:\ case 6:\ case 9:\ case 11:\n      days = 30;\n      break;\n    case 2:\n      days = 28; // うるう年非考慮\n      break;\n    default:\n      days = 0; // 無効な月を示すフラグとして\n      printf("Invalid month number.\\n");\n      break;\n  }\n\n  if (days != 0) { // daysが0でなければ有効な月だったと判断\n      printf("Number of days: %d\\n", days);\n  }\n  return 0;\n}',
    explanation: '`case` ラベルは連続して記述することで、複数の値に対して同じ処理を行えます（フォールスルーの応用）。例えば、31日の月 (1, 3, 5, 7, 8, 10, 12月) は複数の `case` を並べて最後に共通の処理と `break` を書きます。2月は28日、それ以外の30日の月も同様にまとめます。`default` で無効な月を処理します。'
  },

  // --- 第8章: for文を用いた繰り返し ---
  {
    id: 'ch8-for-easy-print1to10',
    title: '8-Easy: 1から10までの表示',
    description: '`for` ループを使用して、1から10までの整数を1行に1つずつ表示してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  // forループで1から10まで表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    printf("%d\\n", i);\n  }\n  return 0;\n}',
    explanation: '`for (初期化式; 条件式; 更新式)` の構文です。\n- `int i = 1;`: ループ開始前にカウンタ変数 `i` を1で初期化します。\n- `i <= 10;`: ループの各反復の前にこの条件を評価し、真ならループ本体を実行、偽ならループを終了します。\n- `i++`: ループ本体の実行後に `i` の値を1増やします。'
  },
  {
    id: 'ch8-for-medium-sum1toN',
    title: '8-Medium: 1からNまでの合計',
    description: 'ユーザーに正の整数 `N` を入力させ、`for` ループを使用して1から `N` までのすべての整数の合計を計算し、表示してください。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int N, sum = 0;\n  printf("Enter a positive integer N: ");\n  scanf("%d", &N);\n\n  // forループで1からNまでの合計を計算\n\n  printf("Sum of numbers from 1 to %d is: %d\\n", N, sum);\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int N, sum = 0;\n  printf("Enter a positive integer N: ");\n  scanf("%d", &N);\n\n  if (N < 1) {\n    printf("Please enter a positive integer.\\n");\n    return 1; // エラー終了\n  }\n\n  for (int i = 1; i <= N; i++) {\n    sum = sum + i; // または sum += i;\n  }\n\n  printf("Sum of numbers from 1 to %d is: %d\\n", N, sum);\n  return 0;\n}',
    explanation: 'まずユーザーから `N` を入力させます。入力値が正であることを確認すると良いでしょう（例では簡単なチェックを入れています）。`sum` 変数を0で初期化し、`for` ループ内でカウンタ変数 `i` を1から `N` まで変化させながら、`sum` に `i` を加算していきます。`sum += i;` は `sum = sum + i;` の短縮形です。'
  },
  {
    id: 'ch8-for-hard-multiplicationtable',
    title: '8-Hard: 九九の表（Nの段）',
    description: 'ユーザーに1から9までの整数 `N` を入力させ、`for` ループを使用して `N` の段の九九（例: N x 1 = 結果, N x 2 = 結果, ..., N x 9 = 結果）を表示してください。',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int N;\n  printf("Enter an integer N (1-9): ");\n  scanf("%d", &N);\n\n  // Nの妥当性チェック (任意)\n  // forループでNの段の九九を表示\n\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int N;\n  printf("Enter an integer N (1-9): ");\n  scanf("%d", &N);\n\n  if (N < 1 || N > 9) {\n    printf("Please enter a number between 1 and 9.\\n");\n    return 1; // エラー終了\n  }\n\n  printf("Multiplication table for %d:\\n", N);\n  for (int i = 1; i <= 9; i++) {\n    printf("%d x %d = %d\\n", N, i, N * i);\n  }\n  return 0;\n}',
    explanation: 'ユーザーから `N` を入力させ、1から9の範囲内かチェックします。`for` ループのカウンタ `i` を1から9まで変化させ、各反復で `N * i` の結果と共に `printf` で整形して表示します。`printf("%d x %d = %d\\n", N, i, N * i);` のように、複数の値を整形して表示できます。'
  },

  // --- 第9章: while文やdo-while文を用いた繰り返し ---
  {
    id: 'ch9-while-easy-print1to5',
    title: '9-Easy: 1から5までの表示 (while)',
    description: '`while` ループを使用して、1から5までの整数を1行に1つずつ表示してください。',
    difficulty: 'Easy',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int i = 1; // カウンタ変数の初期化\n  // whileループで1から5まで表示\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int i = 1;\n  while (i <= 5) {\n    printf("%d\\n", i);\n    i++; // カウンタ変数の更新\n  }\n  return 0;\n}',
    explanation: '`while (条件式)` は、条件式が真である間、ループ本体を繰り返します。\n1. ループ前にカウンタ変数 `i` を1で初期化します。\n2. `while (i <= 5)`: `i` が5以下であるか評価します。\n3. 真ならループ本体 (`printf` と `i++`) を実行します。\n4. `i++` で `i` を更新し、再び条件式を評価します。\n5. `i` が6になると条件式が偽となり、ループを終了します。'
  },
  {
    id: 'ch9-dowhile-medium-positiveinput',
    title: '9-Medium: 正の整数の入力要求 (do-while)',
    description: 'ユーザーが正の整数を入力するまで、繰り返し入力を促すプログラムを `do-while` ループを使用して作成してください。ユーザーが正の整数を入力したら、その数を表示してプログラムを終了します。',
    difficulty: 'Medium',
    starterCode: '#include <stdio.h>\n\nint main() {\n  int num;\n  // do-whileループで正の整数が入力されるまで繰り返す\n\n  printf("You entered a positive number: %d\\n", num);\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n\nint main() {\n  int num;\n  do {\n    printf("Enter a positive integer: ");\n    scanf("%d", &num);\n    if (num <= 0) {\n      printf("Invalid input. Please try again.\\n");\n    }\n  } while (num <= 0); // numが0以下である間繰り返す\n\n  printf("You entered a positive number: %d\\n", num);\n  return 0;\n}',
    explanation: '`do { ループ本体 } while (条件式);` は、まずループ本体を一度実行し、その後で条件式を評価します。条件式が真である間、ループ本体を繰り返します。この問題では、少なくとも一度はユーザーに入力を促すため `do-while` が適しています。入力された `num` が0以下であれば、エラーメッセージを表示し、ループを継続します。`num` が正の数になると `while` の条件 `(num <= 0)` が偽となりループを終了します。'
  },
  {
    id: 'ch9-while-hard-numberguessing',
    title: '9-Hard: 数当てゲーム (while)',
    description: 'プログラムが1から20までのランダムな整数を1つ選びます。ユーザーにその数を当てさせるゲームを作成してください。ユーザーが数を入力するたびに、正解より大きいか小さいか、または正解かをフィードバックします。正解するまで繰り返し、正解したら試行回数を表示してください。`while` ループ（または `do-while`）を使用してください。 (ヒント: 乱数の生成には `stdlib.h` の `rand()`, `srand()` と `time.h` の `time()` を使います)',
    difficulty: 'Hard',
    starterCode: '#include <stdio.h>\n#include <stdlib.h> // rand(), srand()\n#include <time.h>   // time()\n\nint main() {\n  int secret_number, guess, attempts = 0;\n\n  // 乱数の種を設定\n  // 1から20までの秘密の数を生成\n\n  printf("Guess the number (between 1 and 20):\\n");\n\n  // whileループで数当てゲームを実装\n\n  return 0;\n}',
    solutionExample: '#include <stdio.h>\n#include <stdlib.h> // rand(), srand()\n#include <time.h>   // time()\n\nint main() {\n  int secret_number, guess, attempts = 0;\n\n  // 乱数の種を現在の時刻で初期化（毎回異なる乱数系列を得るため）\n  srand(time(NULL));\n\n  // 1から20までの秘密の数を生成\n  secret_number = (rand() % 20) + 1;\n\n  printf("I have selected a secret number between 1 and 20.\\n");\n\n  do {\n    printf("Enter your guess: ");\n    scanf("%d", &guess);\n    attempts++;\n\n    if (guess < secret_number) {\n      printf("Too low! Try again.\\n");\n    } else if (guess > secret_number) {\n      printf("Too high! Try again.\\n");\n    } else {\n      printf("Congratulations! You guessed it in %d attempts.\\n", attempts);\n    }\n  } while (guess != secret_number);\n\n  return 0;\n}',
    explanation: '1. `srand(time(NULL));` で乱数生成器を初期化します。`time(NULL)` は現在の時刻を返すため、プログラム実行ごとに異なる乱数列が得られます。\n2. `secret_number = (rand() % 20) + 1;` で0から19の範囲の乱数を生成し (`rand() % 20`)、それに1を加えて1から20の範囲の数にします。\n3. `do-while` ループを使用し、ユーザーの推測 `guess` と `secret_number` が一致するまで繰り返します。\n4. ループ内でユーザーに入力を促し、試行回数 `attempts` を増やします。\n5. `guess` と `secret_number` を比較し、"Too low", "Too high", または正解のメッセージを表示します。\n6. `guess == secret_number` になるとループ条件 `(guess != secret_number)` が偽となり終了します。'
  }
];

export const C_REFERENCE_ITEMS = [
  {
    id: 'printf',
    name: 'printf',
    description: '書式付き文字列を標準出力（通常は画面）に出力します。',
    syntax: 'int printf(const char *format, ...);',
    example: 'printf("Number: %d\\nString: %s\\n", 10, "test");'
  },
  {
    id: 'scanf',
    name: 'scanf',
    description: '標準入力（通常はキーボード）から書式付きでデータを読み込みます。バッファオーバーフローの脆弱性があるため、文字列入力には注意が必要です。',
    syntax: 'int scanf(const char *format, ...);',
    example: 'int age;\nchar name[50];\nprintf("Enter age: ");\nscanf("%d", &age); \n// 文字列入力例 (注意点あり): printf("Enter name: "); scanf("%49s", name);'
  },
  {
    id: 'int',
    name: 'int',
    description: '整数を格納するための基本的なデータ型です。通常、-32,768 から 32,767 または -2,147,483,648 から 2,147,483,647 の範囲の値を保持します（処理系に依存）。',
    syntax: 'int variable_name;',
    example: 'int count = 10;'
  },
  {
    id: 'double',
    name: 'double',
    description: '倍精度浮動小数点数を格納するためのデータ型です。`float`よりも高い精度と広い範囲の値を扱えます。',
    syntax: 'double variable_name;',
    example: 'double price = 19.99;'
  },
  {
    id: 'char',
    name: 'char',
    description: '単一の文字を格納するためのデータ型です。通常、1バイトの符号付きまたは符号無し整数としても扱われます。',
    syntax: 'char variable_name;',
    example: 'char initial = \'A\';'
  },
  {
    id: 'type-casting',
    name: '型キャスト (Type Casting)',
    description: 'あるデータ型の値を別のデータ型に明示的に変換する操作です。例えば、整数除算の結果を浮動小数点数として得る場合などに使用します。',
    syntax: '(target_type)expression',
    example: 'int a = 5, b = 2;\ndouble result = (double)a / b; // result will be 2.5'
  },
  {
    id: 'if-else',
    name: 'if-else if-else 文',
    description: '条件に基づいて異なるコードブロックを実行するための制御構造です。',
    syntax: 'if (condition1) {\n  // block 1\n} else if (condition2) {\n  // block 2\n} else {\n  // block 3\n}',
    example: 'int x = 10;\nif (x > 0) { printf("Positive"); }\nelse if (x < 0) { printf("Negative"); }\nelse { printf("Zero"); }'
  },
  {
    id: 'switch',
    name: 'switch 文',
    description: '式の値に基づいて複数のケースの中から一致するものを選択し、対応するコードブロックを実行します。主に整数型または文字型の式で使用されます。',
    syntax: 'switch (expression) {\n  case constant1:\n    // statements\n    break;\n  case constant2:\n    // statements\n    break;\n  default:\n    // statements\n}',
    example: 'char grade = \'B\';\nswitch (grade) {\n  case \'A\': printf("Excellent"); break;\n  case \'B\': printf("Good"); break;\n  default: printf("Fair");\n}'
  },
  {
    id: 'for-loop',
    name: 'for ループ',
    description: '指定された回数だけコードブロックを繰り返し実行するために使用されます。初期化、条件、更新の3つの部分で構成されます。',
    syntax: 'for (initialization; condition; increment/decrement) {\n  // statements\n}',
    example: 'for (int i = 0; i < 5; i++) {\n  printf("%d ", i);\n} // Output: 0 1 2 3 4'
  },
  {
    id: 'while-loop',
    name: 'while ループ',
    description: '指定された条件が真である間、コードブロックを繰り返し実行します。ループ前に条件が評価されます。',
    syntax: 'while (condition) {\n  // statements\n}',
    example: 'int i = 0;\nwhile (i < 3) {\n  printf("%d ", i);\n  i++;\n} // Output: 0 1 2'
  },
  {
    id: 'do-while-loop',
    name: 'do-while ループ',
    description: 'コードブロックを少なくとも一度実行し、その後、指定された条件が真である間、繰り返し実行します。ループ後に条件が評価されます。',
    syntax: 'do {\n  // statements\n} while (condition);',
    example: 'int i = 0;\ndo {\n  printf("%d ", i);\n  i++;\n} while (i < 3); // Output: 0 1 2'
  },
  {
    id: 'stdlib-h',
    name: 'stdlib.h',
    description: '標準ライブラリヘッダで、数値変換関数、擬似乱数生成関数 (`rand`, `srand`)、メモリ割り当て関数 (`malloc`, `free`)、プロセス制御関数などが含まれます。',
    syntax: '#include <stdlib.h>',
    example: 'int r = rand() % 100; // 0-99の乱数'
  },
  {
    id: 'time-h',
    name: 'time.h',
    description: '時間と日付を扱うための関数や型が含まれる標準ライブラリヘッダです。`time()` 関数は現在のカレンダー時刻を取得するのに使われ、`srand()` の種としてよく利用されます。',
    syntax: '#include <time.h>',
    example: 'srand(time(NULL)); // 乱数の種を初期化'
  },
  // 既存のリファレンス項目も維持（必要に応じて上記に統合または削除してもよい）
  {
    id: 'malloc',
    name: 'malloc',
    description: '指定されたバイト数のメモリブロックを動的に割り当てます。メモリ確保に成功すると、そのブロックへのポインタを返します。失敗するとNULLを返します。',
    syntax: 'void* malloc(size_t size);',
    example: 'int *arr;\narr = (int*)malloc(10 * sizeof(int));\nif (arr == NULL) { /* エラー処理 */ }'
  },
  {
    id: 'free',
    name: 'free',
    description: '`malloc`、`calloc`、`realloc` で動的に割り当てられたメモリブロックを解放します。',
    syntax: 'void free(void *ptr);',
    example: 'int *arr = (int*)malloc(10 * sizeof(int));\n// ... arrを使用 ...\nfree(arr);'
  },
  {
    id: 'strcpy',
    name: 'strcpy',
    description: 'ある文字列を別の文字列にコピーします（終端のヌル文字 `\\0` を含む）。コピー先のバッファは十分な大きさが必要です。バッファオーバーランに注意。',
    syntax: 'char* strcpy(char *dest, const char *src);',
    example: 'char source[] = "Hello";\nchar destination[10];\nstrcpy(destination, source);'
  },
  {
    id: 'strlen',
    name: 'strlen',
    description: '文字列の長さ（終端のヌル文字 `\\0` を除く文字数）を返します。',
    syntax: 'size_t strlen(const char *str);',
    example: 'char myString[] = "World";\nsize_t length = strlen(myString); // length will be 5'
  },
  {
    id: 'fopen',
    name: 'fopen',
    description: '指定されたモード（読み込み、書き込みなど）でファイルを開きます。成功するとファイルポインタを、失敗するとNULLを返します。',
    syntax: 'FILE* fopen(const char *filename, const char *mode);',
    example: 'FILE *fp;\nfp = fopen("data.txt", "r"); // "r" は読み込みモード\nif (fp == NULL) { /* エラー処理 */ }'
  },
  {
    id: 'fclose',
    name: 'fclose',
    description: '開いているファイルを閉じます。',
    syntax: 'int fclose(FILE *stream);',
    example: 'FILE *fp = fopen("data.txt", "w");\n// ... ファイル操作 ...\nfclose(fp);'
  },
];

export const NAVIGATION_ITEMS = [
  { name: 'トップページ', path: NavigationPath.Home },
  { name: '問題演習', path: NavigationPath.Problems },
  { name: 'C言語辞書', path: NavigationPath.Reference },
  { name: '解答一覧', path: NavigationPath.Solutions }, // Added
];