---
layout: page
title: Articles
navigation: articles
---

## Latest Articles

{% for item in site.posts limit 5 %}
  <a href="{{ item.url }}" title="{{ item.title }}">{{ item.title }}</a>
{% endfor %}