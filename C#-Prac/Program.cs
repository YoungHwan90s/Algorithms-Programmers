using System;

public class Solution
{
    public static int solution(int num1, int num2)
    {
        int answer = 0;
        answer = num1 - num2;
        return answer;
    }

    public static void Main()
    {
        int num1 = 10;
        int num2 = 3;
        int result = solution(num1, num2);
        Console.WriteLine(result);
    }
}