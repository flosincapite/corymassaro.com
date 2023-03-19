---
date_modified: '2023-03-19T05:00:00.000Z'
tags:
  - workshops
  - machine learning
  - writing
  - linguistics
  - divination
page_type: standard
title: Workshops
description: Writing workshops I give
permalink: /workshops/
---

I give writing workshops in which machine learning and computational techniques aid, but do not replace, human creativity. These workshops combine textual generation concepts borrowed from Surrealism, divinatory practices, and big data techniques; the results were the product equally of intuition and intellect, and of collaboration among participants both human and machine. My intention is, first and always, for participants to be inspired and build community. After that, I hope to provoke discussion about technology, gently spread neo-Luddite propaganda, and offer participants some resources to help them resume control of their digital subtle bodies.

If you'd like to participate or host a future workshop, [contact me](/contact/ "contact cory")!

I'm fascinated by efforts to approach (or create) text that allow mediation by subtle forces. In divinatory practices, the subtle forces are conceived as metaphysical or spiritual: when one performs bibliomancy, one allows for the possibility that something guides the hand, and makes the finger land on a specific page, and causes the eye to fall on a particular line. When reading the Tarot, something causes the cards to emerge in a particular order and assume their fated positions within the narrative frame of the reading. Whether that something be a distinct spiritual presence, a universal immanence, one's own energetic aptitude, or simple randomness/entropy (perhaps in personified form)—in any case, the diviner cedes control to that subtle force, welcome its input, and then accesses their own intuitive and rational powers to spin a narrative.

In this view, algorithmic text generation methods like William S. Burroughs's cut-up method or black-out poetry or games like Exquisite Corpse constitute extensions of divinatory practice. They read the auguries from paper cranes.

Corpus linguistics, natural language processing, and data mining offer other subtle avenues to finding narrative. The spirits here are a bit better defined, and one can even manipulate them directly. If Exquisite Corpse is paper augury, then the techniques I'll talk about here are more like consulting a distant oracle; and when a programmer gets involved, they're digital haruspicy—digging around in a virtual guinea pig's guts.

<div style="text-align:center;">* * *</div>

In July 2022, I gave two writing workshops as part of [my residency at arthereistanbul](https://www.arthereistanbul.com/corymassaro "cory's resident page at arthereistanbul").

For these workshops, I created large text corpora in a number of languages, according to the needs of the participants \[Modern Standard Arabic, English, French, Kurdish (Kurmancî), Persian (فارسی), Spanish (Castellano), and Urdu]. With this text data, I trained the oracle using a technique called word2vec. This technique relies solely on the order in which words are found in text; however, it produces oracles with surprisingly accurate ideas of which words' meanings are similar, and even permits oracles to perform some analogical reasoning. For example, the English-language oracle thinks that the word "flower" is similar to words like "mushroom," "leaf," and "bean"; and if you provide it the analogy `Paris:France::Beijing:?`, it gives the very reasonable answer, "China."

[The oracle](/oracle/ "the language garbage oracle") sees words and concepts as many-dimensional vectors. This means it can move between words by gradually moving along these vectors, in many directions at once, from its many-faceted vision of one word to that of another word. In the workshop, we played with different starting and ending points, having the oracle recite lists of words to us as it encountered them in its passage. When the oracle would complete one of its word-trails, we would use the listed words in order as the seed of a poem or story.

We also explored the oracle's analogical powers. We could click on one of the words it had given us, and the oracle would tell us a few other words it thought were similar. From there, too, we could derive creative insight: [why is "lemon" like "catfish"](https://korybant.com/oracle/synonyms/en_combined/lemon "really though, why")?

<div style="text-align:center;">* * *</div>

In January 2023, I gave [a workshop at LABoral Centro de Arte](https://twitter.com/i/web/status/1617594339638509576 "twitter post by LABoral about my workshop ") in Gijón, Spain. We worked with the oracle as well as the [confused poet](/confused-poet/ "the confused poet"), an algorithm which allows one to upload their own text data in order to train a random text generation algorithm.

On the day of the workshop, [Chat GPT](https://en.wikipedia.org/wiki/ChatGPT "chatgpt :(") was on everyone's minds. The tool had been in the news recently, and this sparked discussion about many important topics surrounding language technology, the automation of art production, and the politics of data ownership. What are the dangers of closed, inscrutable machine-learned models? What happens when the huge corporations that collect data and train models are in no way answerable to consumers or laws? What protections against abuse are realistically possible given the extreme difficulty of [interpretability in AI](https://en.wikipedia.org/wiki/Explainable_artificial_intelligence "AI interpretability")? On the other hand, what happens when the barrier between training data and consumers is too porous, as in the case of [Microsoft's famous white supremacist AI, Tay](https://en.wikipedia.org/wiki/Tay_\(bot\) "bad robot")? These were the kinds of questions we discussed between writing exercises.
