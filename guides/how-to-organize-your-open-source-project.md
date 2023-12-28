---
layout: article
title: How to Organize Your Open Source Project
subtitle: Guide to make your project clear, inviting and easy to maintain
---

Start here [https://github.com/fulldecent?tab=repositories&type=source](https://github.com/fulldecent?tab=repositories&type=source) and edit oldest project (at bottom). Click on each one and follow instructions below.

## Is the project abandoned?

**Archive it.** Don't waste people's time.

## Ask for money

Nobody wants to pay for your open source software. But you'll be remiss if you don't ask.

Here is the classy way to ask for money. And this approach comes from https://mochajs.org

> Use Mocha at Work? Ask your manager or marketing team if they’d help support our project. Your company’s logo will also be displayed on [npmjs.com]() and our [GitHub repository]().




## Main checklist



- [ ] Add "HOW TO RELEASE.md"

- [ ] Update README.md

  - [ ] Include a PICTURE!
  - [ ] Getting started / install guide
    * Link to Doc folder if needed
  - [ ] Add "## Project scope"
    - [ ] "This project exists to ..."
    - [ ] "The project maintainer..." reason to be involved
  - [ ] Add "## Contributing"
  - [ ] Contributions to 19 Questions are welcome and encouraged
        - [ ] Define scope or what contributions we want
  - [ ] About the maintainer
        - [ ] Why did you create it? Answering these questions for yourself will make it easier to convince others.
  - [ ] What makes your project different or interesting? Put those parts in bold or italics.
  - [ ] Start by writing down the goals of your project. Add them to your README, or create a separate file called VISION. If there are other artifacts that could help, like a project roadmap, make those public as well.
  - [ ] Your README is [more than just a set of instructions](https://opensource.guide/starting-a-project/#writing-a-readme). It’s also a place to talk about your goals, product vision, and roadmap. If people are overly focused on debating the merit of a particular feature, it may help to revisit your README and talk about the higher vision of your project. Focusing on your README also depersonalizes the conversation, so you can have a constructive discussion.
  - [ ] If maintaining your project is part-time or purely volunteered, be honest about how much time you have. This is not the same as how much time you think the project requires, or how much time others want you to spend.
        - How a contribution is reviewed and accepted (*Do they need tests? An issue template?*)
        - The types of contributions you’ll accept (*Do you only want help with a certain part of your code?*)
        - When it’s appropriate to follow up (*ex. “You can expect a response from a maintainer within 7 days. If you haven’t heard anything by then, feel free to ping the thread.”*)
        - How much time you spend on the project (*ex. “We only spend about 5 hours per week on this project”*)

- [ ] Create CONTRIBUTING.md

  - [ ] Project scope / what will be accepted

  - [ ] Release process

  - [ ] Fully document your release process here.

        This should be detailed enough for a robot. Sometimes if I'm working late at night it is very easy for me to make mistakes and forget steps. This list will help.

----

# Reference a code style guide

- [ ] Find which code style guide is appropriate
      * C: https://matt.sh/howto-c
- [ ] Use it
- [ ] Make an issue to add it into automated testing

# Promote the project

Remember that people get involved as users, and eventually contributors, because it solves a problem for them. As you think about your project’s message and value, try to view it through the lens of what *they* might want.

Take advantage of existing online communities and platforms to reach your audience. If your open source project is a software project, you can probably find your audience on [Stack Overflow](http://stackoverflow.com/), [reddit](http://www.reddit.com/), [Hacker News](https://news.ycombinator.com/), or [Quora](https://www.quora.com/). Find the channels where you think people will most benefit from or be excited about your work.

- **Get to know relevant open source projects and communities.** Sometimes, you don’t have to directly promote your project. If your project is perfect for data scientists who use Python, get to know the Python data science community. As people get to know you, natural opportunities will arise to talk about and share your work.
- **Find people experiencing the problem that your project solves.** Search through related forums for people who fall into your project’s target audience. Answer their question and find a tactful way, when appropriate, to suggest your project as a solution.
- **Ask for feedback.** Introduce yourself and your work to an audience that would find it relevant and interesting. Be specific about who you think would benefit from your project. Try to finish the sentence: *“I think my project would really help X, who are trying to do Y*”. Listen and respond to others’ feedback, rather than simply promoting your work.

Generally speaking, focus on helping others before asking for things in return. Because it is easy for anybody to promote a project online, there will be a lot of noise. Give people context for who you are, not just what you want, to stand out from the crowd.

If nobody pays attention or responds to your initial outreach, don’t get discouraged! Most project launches are an iterative process that can take months or years. If you don’t get a response the first time, try a different tactic, or look for ways to add value to others’ work first. These things take time and dedication.

Helping newcomers, sharing resources, and making thoughtful contributions to others’ work will help you build a positive reputation. Then, people will have context for your work and be more likely to pay attention and share what you’re doing.

Sometimes, these relationships can even lead to official partnerships with the wider ecosystem.

Be patient, and keep sharing your work with those who appreciate it.

### Contributing

https://opensource.guide/how-to-contribute/

https://opensource.guide/starting-a-project/

- The types of contributions you’re looking for
- Your roadmap or vision for the project
- How contributors should (or should not) get in touch with you

Thanks for reading this far. You are probably already using our project already and any feedback you have is a great contribution. Here are several ways to help:

* Report an issue [ISSUES LINK] — send a report of something that's broken, or a proposal for how we can do this better
* Improve documentation — 
* Improve testing — 
* Organize workshops / chats or interviews to raise awareness about this project
* Design — 
* Translations, writing — 
* Write code [CLONE LINK] — please help with some of these important areas that we are focused on or anything else you want to help with, then submit a pull request [LINK]
  * Important thing 1
  * Important thing 2

https://opensource.guide/building-community/

- **Make it easy for someone to use your project.** [A friendly README](https://opensource.guide/starting-a-project/#writing-a-readme) and clear code examples will make it easier for anyone who lands on your project to get started.
- **Clearly explain how to contribute**, using [your CONTRIBUTING file](https://opensource.guide/starting-a-project/#writing-your-contributing-guidelines) and keeping your issues up-to-date.


- **If there’s a contribution you disagree with,** thank them for their idea and [explain why](https://opensource.guide/best-practices/#learning-to-say-no) it doesn’t fit into the scope of the project, linking to relevant documentation if you have it.

[A Mozilla study found that](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) contributors who received code reviews within 48 hours had a much higher rate of return and repeat contribution.

Conversations about your project could also be happening in other places around the internet, such as Stack Overflow, X, or Reddit. You can set up notifications in some of these places so you are alerted when someone mentions your project.

- **Give every contributor commit access.** [@felixge](https://github.com/felixge) found that this made people [more excited to polish their patches](http://felixge.de/2013/03/11/the-pull-request-hack.html), and he even found new maintainers for projects that he hadn’t worked on in awhile.

----



If you’re looking for others to pitch in, start by asking around.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.



Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (…) Once people have commit access, they are no longer worried that their patch might go unmerged…causing them to put much more work into it.





---

- **They get other benefits from contributing to open source,** such as building their reputation or portfolio, learning a new skill, or feeling closer to a community.

If your project is hosted on GitHub, [you can view](https://help.github.com/articles/about-repository-graphs/#traffic) how many people land on your project and where they come from. From your project’s page, click “Graphs”, then “Traffic”. On this page, you can see:

You may also want to [track discoverability in specific places](https://opensource.com/business/16/6/pirate-metrics): for example, Google PageRank, referral traffic from your project’s website, or referrals from other open source projects or websites.

Unresponsive maintainers become a bottleneck for open source projects. If someone submits a contribution but never hears back from a maintainer, they may feel discouraged and leave.

Consider tracking how long it takes for you (or another maintainer) to respond to contributions, whether an issue or a pull request. Responding doesn’t require taking action. It can be as simple as saying: *“Thanks for your submission! I’ll review this within the next week.”*

----

Promoting

in the README make a LARGE list of the intended audience. Include specific names of interested parties. Find the project for https://opensource.guide/ and make an issue — ask where should we keep this type of information, including lists of websites that link to our competitors. Maybe this should not be an issue because it is an ongoing thing. Maybe it should be a separate file of people to contact as part of the release process…?

----

Update C code with https://matt.sh/howto-c