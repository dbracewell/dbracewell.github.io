---
layout: post
title:  "An Overview of Hermes"
date:   2016-01-17 13:02:26
categories: NLP hermes
---

Hermes is a Natural Language Processing framework for Java inspired by the Tipster Architecture and TextBlob. Hermes focuses on simplifying the development and use of NLP technologies by providing a framework to quickly access and construct linguistic annotations on documents using multiple cores or multiple machines (using Apache Spark). At the core of Hermes is the HString which acts like a Java string on steroids.

The core Hermes package provides modules for tokenization, sentence segmentation, part-of-speech tagging, shallow parsing, named entity recognition, dependency parsing, lexicon matching, and a rule-based extraction framework. 

Quickstart Example
----------------------

{% highlight java %}
//Initializes configuration settings
Config.initialize("GettingStarted");

//Documents are created using the DocumentFactory class which takes care of preprocessing text (e.g
//normalizing white space and unicode) and constructing a document.
Document document = DocumentFactory.getInstance().create("The quick brown fox jumps over the lazy dog.");

//The pipeline defines the type of annotations/attributes that will be added to the document.
//Processing is done parallel when multiple documents are passed in.
Pipeline.process(document, Types.TOKEN, Types.SENTENCE);

//For each sentence (Types.SENTENCE) print to standard out
document.sentences().forEach(System.out::println);

//Counts the token lemmas in the document (since we don't have lemmas 
//annotated it will just return lower case forms)
Counter<String> unigrams = document.countLemmas(Types.TOKEN);
//Prints: Count(the) = 2
System.out.println("Count(the) = " + unigrams.get("the"));

//Add a custom annotation, by performing a regex for fox or dog
//First define the type
AnnotationType animalMention = AnnotationType.create("ANIMAL_MENTION");
//Second create annotations based on a regular expression match
Matcher matcher = document.matcher("\\b(fox|dog)\\b");
while (matcher.find()) {
  document.createAnnotation(animalMention, matcher.start(), matcher.end());
}

//Print out the animal mention annotations
document.get(animalMention).forEach(a -> System.out.println(a + "[" + a.start() + ", " + a.end() + "]"));

{% endhighlight %}

[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll]:    http://jekyllrb.com
