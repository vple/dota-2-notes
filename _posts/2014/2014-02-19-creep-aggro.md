---
layout: article
title: Creep Aggro
category: articles
navigation: articles
hero-image: http://cdn.dota2notes.com/images/screenshots/2014/02/19/ca-draw-aggro.jpeg
blurb: >
  Improve your laning phase by manipulating creep aggro.
---

At all levels of play, you can improve your laning by understanding and utilizing creep aggro to your advantage. In this article, we’ll first go over the mechanics and effects of drawing creep aggro. Then, we’ll take a look at a few ways to utilize this knowledge.

## What Is Creep Aggro?

Creep aggro is where your opponent’s lane creeps change from their current attack target to you. In particular, we’re interested in why they stop attacking your lane creeps and instead start chasing after you.

The answer is straightforward: you attacked an enemy hero. More specifically, when you issue an attack command on an enemy hero, nearby creeps do an “aggro check.” If those creeps are within 500 units of you, they’ll change their attack target to you.

It’s important to note that this aggro check occurs when you issue an attack command, meaning as soon as you right-click or a-click the enemy hero. It is not triggered by your attack flying or hitting the enemy hero.

This is worth repeating: you don’t have to launch an attack to draw creep aggro. You only have to right click your opponent, even if you are too far away to actually attack them.

The aggro check has a cooldown of 2 seconds; you can’t draw creep aggro if you recently triggered an aggro check. So, immediately after you trigger an aggro check, you can attack the opposing hero from anywhere without drawing creep aggro.

### Example

In this image, I’m issuing an attack command (a right click) on the enemy Warlock. The green circle around me (Lina) is set to 500 units---the creep aggro radius.

{% include image.html
  src="http://cdn.dota2notes.com/images/screenshots/2014/02/19/ca-aggro-check.jpeg"
  caption="Triggering an aggro check by right-clicking Warlock." %}

Note that all three of the enemy creeps are within 500 units of me when I right click Warlock. As a result, they all change their aggro to attack me instead of the lane creeps.

{% include image.html
  src="http://cdn.dota2notes.com/images/screenshots/2014/02/19/ca-draw-aggro.jpeg"
  caption="Drawing creep aggro." %}

In this example, I didn’t actually launch an attack at Warlock. I right-clicked him, but started moving away immediately. The aggro check is still triggered.

Because this is a custom lobby, I’m able to display a range around my hero. You can’t do this is a normal pub game. Instead, you need to learn to eyeball the appropriate distance. 500 units is a bit smaller than most ranged heroes’ attack range.

### Effects

In order to fully utilize creep aggro to your advantage, you need to understand what happens as a result of drawing creep aggro.
The most obvious thing that occurs is that your opponent’s creeps try to attack you. Ranged creeps often only need to turn in order to be able to hit you. Melee creeps, however, will chase you until they can hit you or lose their aggro on you. When they lose aggro on you, they’ll go and attack their new target---probably the nearest lane creep. This is the entire chain of events that occurs when you draw creep aggro.

Although this chain of events is very straightforward, there are two subtle things that just happened.

First, the creeps changed position. Your opponent’s creeps chased you, then returned to attacking your creeps. They’re in a slightly different place as a result. Similarly, your creeps may have moved slightly as they chased your opponent’s creeps.

Second, your opponent’s creeps temporarily stopped attacking your creeps. However, your creeps did not stop attacking. So, your opponent’s creeps are dying faster than your own! If both creep waves started about equal, your opponent’s creeps will die first. Consequently, your lane will push.

In addition to the conditions that trigger creep aggro, we’ll be considering these two effects when determining how we can utilize creep aggro to our advantage.

## Harassing

Harassing occurs all the time during the laning phase; players can and should aim to squeeze in extra right clicks against the opposing heroes.

To harass properly, you need to not draw creep aggro. Why? Aside from getting creeps to hit you, drawing creep aggro results in repositioning creeps and causing your lane to push. The first doesn’t help or hurt you when it comes to harassment. The second does; pushing your lane makes it harder for your carry to farm safely.

How can we not draw creep aggro? If we start our attack command from anywhere, we’ll probably have enemy creeps within the 500 range aggro radius (as shown before). Consequently, we’ll draw aggro. Instead, we want to start our attack command from outside of this 500 range. Done properly, this will cause our hero to attack the opponent without drawing aggro from any creeps.

There are two caveats here. First, you need to launch your attack within 2 seconds of triggering the aggro check (which is when you issue your attack command). Otherwise, the aggro check will come off cooldown. If you’re within aggro radius when the second check is applied, you’ll draw creep aggro. Second, you need to be a ranged hero. A melee hero is unable to issue an attack from outside aggro radius and execute the attack within 2 seconds.

Now, what happens after our attack is in the air? If we let our hero go for a second attack, we’ll draw creep aggro. This is because the aggro check comes off cooldown after our first attack and is triggered again because we are still attacking a hero.

Instead, stop attacking after you launch your first attack. Then, back away. Once you get far enough (over 500 units from an enemy creep), you can turn around and do the entire process again.

## Farming Safely

In some situations, you might die or take heavy harassment just by going in for a last hit. This typically occurs for melee heroes, in particular when they’re solo offlane or against a stronger lane. Although it’s good to gain experience, we’d like to get some farm out of our lane as well. How can we do this?

{% include image.html
  src="http://cdn.dota2notes.com/images/screenshots/2014/02/19/ca-last-hit.jpeg"
  caption="It’s painful to go for a last hit." %}

We can utilize creep aggro to reposition the creep wave. The idea is simple---get close to enemy creeps and issue an attack command on an enemy hero. This triggers creep aggro. Then, walk back towards your tower. This will reposition the enemy creeps to be closer to your tower. Remember that you don’t actually have to hit the opposing hero; you can just right click them and immediately cancel your attack.

{% include image.html
  src="http://cdn.dota2notes.com/images/screenshots/2014/02/19/ca-offlane-aggro.jpeg"
  caption="Drawing creep aggro." %}

Sometimes your opponent’s creeps don’t travel as far as you’d like them to. That’s not a problem. Just go and draw creep aggro again.

When done properly, you’ll end up with some creeps that are safer for you to farm. Note that I can now approach these two melee creeps without taking harassment.

{% include image.html
  src="http://cdn.dota2notes.com/images/screenshots/2014/02/19/ca-reposition-creeps.jpeg"
  caption="The repositioned creeps." %}

It’s fairly common for this technique to result in two separate groups of creeps fighting each other. That’s completely fine; that’s also what makes it safer for you to approach the creep wave.

You might be wondering how creep repositioning affects creep equilibrium, especially since the act of drawing creep aggro makes your lane push slightly. The answer is: it varies. Factors such as what the creeps end up attacking will decide whose lane ends up pushing.

Let’s elaborate on that factor. In the above image, note how my opponent’s creeps are now attacking my ranged creep. This means my ranged creep will die sooner and my creep wave’s DPS will (generally) be less than my opponent’s. As a result, their lane pushes. Note that this also suggests that you should try to draw your opponent’s creeps onto your ranged creep.

There are a variety of other possible factors as well, but in the end it all boils down to whose creep wave dies first.

Creep repositioning is a very simple and effective technique. However, here are a few things you should keep in mind:

* Don’t try to reposition your opponent’s ranged creeps. They won’t follow you very far.
* Don’t make a positioning mistake just to draw creep aggro. You have to get fairly close to the enemy creep wave in order to draw aggro, but this isn’t necessarily safe!
* Likewise, some lanes can still initiate on you after you’ve repositioned the creeps.
* It’s sometimes okay to auto-attack creeps after you reposition them. The reasoning behind this is that you want to get in some last hits before the enemy heroes come up to harass you.

## Additional Uses

As you’ve seen, it’s simple and effective to utilize creep aggro. We’ll conclude with two more ways you can use creep aggro to your advantage.

### Creep Peeling

You can “peel” an individual enemy creep away by drawing its aggro while not drawing the other creeps’ aggro. The idea behind this is to peel away a single creep that you want to last hit. By repositioning that creep, you make it harder for your opponent to deny it and you make it easier for you to get the last hit. Moreover, you avoid disturbing the remainder of the creeps. This can be particularly useful in mid.

{% include image.html
  src="http://cdn.dota2notes.com/images/screenshots/2014/02/19/ca-creep-peel.jpeg"
  caption="Peeling away a single creep." %}

### Harassing

We already took a look at how to harass without drawing creep aggro. However, you can utilize creep aggro in another way. If your opponent is standing near your creeps, you can harass them. If they try to harass you back, they’ll draw your creeps’ aggro onto themselves.