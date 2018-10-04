package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // variable
        String name;

        //print
        System.out.println("What your name ? : ");

        //Input
        Scanner box = new Scanner(System.in);
        name = box.nextLine();
        System.out.println(name);
    }
}
