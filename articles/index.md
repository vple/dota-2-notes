---
layout: page
title: Articles
navigation: articles
---

<ul class="post-summaries-container">
  {% for post in site.posts %}
    {% include article-summary.html post=post %}
  {% endfor %}
</ul>