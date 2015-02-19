---
layout: post
title:  "Ch 0: Welcome to Rex!"
date:   2015-02-14 18:03:36
categories: rex
---

Hi! Welcome to this blog/tutorial on creating a new interpreted language. This post will serve as a quick intro to what we'll be doing as well as what you'll need and a few disclaimers. Please note that this tutorial is still in progress and I am writing this tutorial at the same time as writing the interpreter so more chapters will be added regularly as time goes on! You can follow me on Twitter ([@reparadocs][twitter]) or subscribe to the [RSS feed][rss] in order to get updates on when new chapters are posted. I'll set up a mailing list at some point maybe. Throughout this tutorial, if you have any ideas, comments, questions, etc. I would love to hear from you. Tweet at me, or email me (rishab@bittersyntax.com).

###What are we going to be making?
By the end of this tutorial, you should hopefully end up with a fully functional interpreter in Java that can interpret our new programming language that I am naming Rex. You should also have enough information to go and implement any cool new features into Rex that you can think of.

### How the tutorial is structured
The tutorial will be broken down into chapters. Each chapter will begin with an explanation of the problem we'll be tackling in the chapter. After that, you will be asked to code some sort of solution to the problem. For example, I might say design a Hello World program in Java and then I'll post a code snippet like this:

<b><a> Show Code </a></b>
{: .showHide target="1"}

<div class="targetDiv" id="div1">
{% highlight Java %}
public class Tutorial
{
   public static void main(String[] args)
   {
      System.out.println("Hello World!");
   }
}
{% endhighlight %} 
</div>

**You should only look at the given code after you have devised your own solution** otherwise there is no way you're going to learn the content. If you just want to browse through my code, theres an [easier way to do that][github-rex]. After each code snippet, I'll explain some of the more complex parts of it. If you are asked to create a solution to a problem and are entirely clueless as to what you're being asked to do, that's probably my fault, please let me know and I will fix it. Hopefully if you go through all the chapters in order and start with a basic knowledge of Java you should not feel lost at any point. However, if you do become lost (or have any other questions, comments, etc.) please e-mail me (rex@bittersyntax.com) and I'll do my best to help you out!

At the beginning of each chapter, there will also be a github link to the code that is up to date till the beginning of that chapter. In case you are curious, you can check out my current progress on Rex (the language we'll be creating) [here][github-rex]. 

### Why create a new programming language?
Mainly for the learning experience! Yes, its true that there are already hundreds of languages out there and C/Java/Python/etc already do what you want, but do you really know how they work? This is a great hands-on way to do that. On top of that, implementing your own language allows you to create cool new features that no one else might have thought of. A really good post on this is [The Incredible Rewards Of Creating a Programming Language][rewards] by Michael Fairhurst where he outlines why he created a new programming language, one which doesn't require variable names! 

### Why are we making an interpreted language vs a compiled language?
If you're not already familiar with the concept of interpreted vs compiled languages, I encourage you to read [this post][purdue-vs] as well as conduct a little research on your own, as this is an important concept to grasp. The main reason is that writing an interpreted language is far easier than writing a compiled language "from scratch." However, it is true that there are several tools that exist such as [Bison][bison], [Flex][flex], and [LLVM][llvm] that make writing any language (compiled or interpreted) far easier. However, because this is mainly a learning excercie, this tutorial will write the interpreter "from scratch" using Java, and so creating an interpreted language is far easier.

### Reasons to do this tutorial
- You're curious about how interpreted languages really work
- You've always wanted to say "I've created a programming language"
- It looks good on a resume
- You have an amazing idea for a feature a language should implement

### I'm sold! What do I need?
We're going to write the interpreter in java without any external libraries, frameworks, etc. so really all you need is the [Java Development Kit][jdk], a text editor of some kind, and the terminal. I'm using a Mac and Sublime Text/Vim, so for those of you opting to use Windows and/or an IDE of some sort, feel free to do so, but know that if anything goes wrong due to those tools I will probably unable to provide meaningful support (although I can try!). I will be writing this assuming you understand basic Java concepts (OOP, Inheritance, etc.) and Programming concepts (Stacks, Lists, etc.).

### Disclaimer
I'm not some sort of wizard at programming. At the time of this writing, I'm still completing my undergraduate degree so the language will probably end up being horribly inefficient and I may be making horrible design decisions along the way. Hopefully, this will still serve as a great learning experience. I'm writing this tutorial because I haven't seen a comprehensive one that only assumes the reader just has a knowledge of Java. If I do make a horrible mistake, feel free to contact me (rex@bittersyntax.com)

# Next Chapter: [Overview of an Interpreter][ch1]

[twitter]:     http://twitter.com/reparadocs
[rss]:         http://bittersyntax.com/feed.xml
[rewards]:     http://mikedrivendevelopment.blogspot.com/2015/02/the-incredible-rewards-of-creating.html
[purdue-vs]:   https://www.cs.purdue.edu/homes/cs290w/javaLecs/wk1/minilec2.html
[bison]:       http://www.gnu.org/software/bison/
[flex]:        http://flex.sourceforge.net/
[llvm]:        http://llvm.org/
[jdk]:         http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
[github-rex]:  https://github.com/Reparadocs/Rex
[ch1]:         /rex/2015/02/14/rex-ch1.html
