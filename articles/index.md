---
layout: page
title: Articles
navigation: articles
show_header: true
---

<ul class="post-summaries-container">
  {% for post in site.posts %}
    {% include article-summary.html post=post %}
  {% endfor %}
</ul>