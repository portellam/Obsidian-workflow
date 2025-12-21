---
<%*
const intervals = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"];
const selection = await tp.system.suggester(intervals, intervals);
const calendarInterval = selection || "Periodic";



await tp.file.move("/10 - Daily/" + calendarInterval + " Tracker - " + tp.date.now("YYYY-MM-DD"));
%>title: "<% calendarInterval %> Habits Tracker"
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
lastmod: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
categories: <% calendarInterval %>
tags:
  - habit
aliases:
share: false
---
# <% calendarInterval %> Habits Tracker
___
## Good <% calendarInterval %> Habits
___



## Bad <% calendarInterval %> Habits
___
