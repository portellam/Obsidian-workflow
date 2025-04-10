---
title: <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>
date: <% moment(tp.file.creation_date()).format("YYYY-MM-DD HH:mm:ss") %>
lastmod: <% moment(tp.file.creation_date()).format("YYYY-MM-DD HH:mm:ss") %>
categories:
tags: weekly-notes
aliases:
share: false
---

# <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>

<%*
const currentMoment = moment(tp.file.title, "GGGG-[W]WW");
const hash = '# ';
const slash = ' / ';
const pipe = ' | ';
const leftAngle = '❮ ';
const rightAngle = ' ❯';
tR += leftAngle;
tR += '[[' + currentMoment.format('YYYY') + ']]' + slash;
tR += '[[' + currentMoment.format('YYYY-[Q]Q|[Q]Q') + ']]' + slash;
tR += '[[' + currentMoment.format('YYYY-MM|MMMM') + ']]' + slash;
tR += '[[' + currentMoment.format('GGGG-[W]WW') + '|' + currentMoment.format('[Week] WW') + ']]';
tR += rightAngle;
tR += '\n';
tR += '\n';
tR += leftAngle;
currentMoment.add(-1,'weeks');
tR += '[[' + currentMoment.format('GGGG-[W]WW|[Week] WW') + ']]' + pipe;
currentMoment.add(1,'weeks');
tR += currentMoment.format('[Week] WW') + pipe;
currentMoment.add(1,'weeks');
tR += '[[' + currentMoment.format('GGGG-[W]WW|[Week] WW') + ']]';
currentMoment.add(-1,'weeks');
tR += rightAngle;
tR += '\n';
tR += '\n';
tR += leftAngle;
tR += '[[' + currentMoment.format('YYYY-MM-DD|ddd Do') + ']]' + pipe;
currentMoment.add(1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|ddd Do') + ']]' + pipe;
currentMoment.add(1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|ddd Do') + ']]' + pipe;
currentMoment.add(1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|ddd Do') + ']]' + pipe;
currentMoment.add(1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|ddd Do') + ']]' + pipe;
currentMoment.add(1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|ddd Do') + ']]' + pipe;
currentMoment.add(1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|ddd Do') + ']]';
tR += rightAngle;
%>

## Dashboard 🗺️

```dataviewjs
await dv.view("scripts", {pages: "dv.pages().file.where(f => f.folder != '_Sources' && f.folder != '04 - Archives' && f.folder != 'templates').tasks.where(t => !t.text.includes('🔁'))", view: "week", firstDayOfWeek: "1", options: "style8 filter", dailyNoteFolder: "10 - Daily Notes"})
```

> [!CHECK]+ Projects 🎯
>
> ```tasks
> not done
> is not recurring
> description includes ]]
> filter by function task.happens.moment?.isSameOrBefore('<% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>', 'week') || false
> group by happens
> ```

> [!CHECK]+ Tasks ✅
>
> ```tasks
> not done
> is not recurring
> description does not include ]]
> filter by function task.happens.moment?.isSameOrBefore('<% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>', 'week') || false
> group by happens
> ```

> [!TODO]+ Recurring 🔁
>
> ```tasks
> not done
> is recurring
> filter by function task.happens.moment?.isSameOrBefore('<% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>', 'week') || false
> group by happens
> ```

> [!IMPORTANT]+ Next Actions 🏃
>
> ```tasks
> not done
> is not recurring
> description does not include ]]
> tags include #next
> group by function task.tags.filter( (tag) => ! tag.includes("#next") )
> ```

> [!EXAMPLE]+ Upcoming Projects (by date) 🎯
>
> ```tasks
> not done
> is not recurring
> description includes ]]
> filename does not include Passions Backlog 🎮
> (heading does not include Focus) AND (heading does not include Goals)
> group by function (!task.happens.moment) ? '%%4%% *Undated*' : result = task.happens.moment.isBefore(moment(), 'day') ? '%%1%% ==Overdue==' : result = task.happens.moment.isSame(moment(), 'day') ? '%%2%% **Today**' : '%%3%% Future'
> group by function task.happens.format("YYYY > 0Q[ - Quarter] > MM[ - ]MMMM > [Week] WW", task.priorityNameGroupText)
> group by function task.happens.format("YYYY-MM-DD dddd")
> ```

> [!QUESTION]+ Waiting For 💤
>
> ```tasks
> not done
> is not recurring
> description does not include ]]
> tags include #waiting
> group by filename
> ```

> [!BUG]+ Delegated 👷‍♂️
>
> ```tasks
> not done
> is not recurring
> description does not include ]]
> tags include #delegated
> group by filename
> ```

> [!SUMMARY]+ Higher Focus 🔥 & Goals 🎯
>
> ```tasks
> not done
> is not recurring
> (path includes "10 - Daily Notes") OR (path includes "10 - Periodic Notes")
> (heading includes Focus) AND (heading includes Goals)
> group by function '%%' + (task.heading.includes("Yearly Focus 🔥 & Goals 🎯") ? "1" : task.heading.includes("Quarterly Focus 🔥 & Goals 🎯") ? "2" : task.heading.includes("Monthly Focus 🔥 & Goals 🎯") ? "3" : task.heading.includes("Weekly Focus 🔥 & Goals 🎯") ? "4" : task.heading.includes("Daily Focus 🔥 & Goals 🎯") ? "5" : "6") + '%%' + task.heading + " > " + task.file.filenameWithoutExtension + " > " + task.tags
> ```

## Underground 🚇

> [!EXAMPLE]+ Upcoming Projects (by priority) 🎯
>
> ```tasks
> not done
> is not recurring
> description includes ]]
> filename does not include Passions Backlog 🎮
> (heading does not include Focus) AND (heading does not include Goals)
> group by priority
> ```

> [!EXAMPLE]+ Upcoming Projects (by areas) 🎯
>
> ```tasks
> not done
> is not recurring
> description includes ]]
> filename does not include Passions Backlog 🎮
> (heading does not include Focus) AND (heading does not include Goals)
> group by filename
> ```

> [!INFO]+ Projects On Hold 🎯
>
> ```tasks
> status.type is NON_TASK
> description includes ]]
> group by filename
> ```

> [!INFO]+ Tasks On Hold ✅
>
> ```tasks
> status.type is NON_TASK
> description does not include ]]
> group by filename
> ```

> [!INFO]+ Unplanned Projects 🎯
>
> ```tasks
> not done
> description includes ]]
> filename does not include Passions Backlog 🎮
> (heading does not include Focus) AND (heading does not include Goals)
> (status.type is TODO) AND (no happens date)
> group by filename
> sort by created
> ```

> [!INFO]+ Unplanned One-Off Tasks ✅
>
> ```tasks
> not done
> description does not include ]]
> path includes 10 - Daily Notes
> (heading does not include Focus) AND (heading does not include Goals)
> (status.type is TODO) AND (no tags) AND (no happens date)
> group by filename
> sort by created
> ```

> [!INFO]+ Unplanned Projects Tasks ✅
>
> ```tasks
> not done
> description does not include ]]
> (path does not include 10 - Daily Notes) AND (path does not include 10 - Periodic Notes)
> filename does not include Passions Backlog 🎮
> (status.type is TODO) AND (no tags) AND (no happens date)
> group by filename
> sort by created
> ```

## Logs 🪵

> [!NOTE]+ Projects Created ➕
>
> ```tasks
> not done
> description includes ]]
> created on <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>
> group by created
> ```

> [!NOTE]+ Tasks Created ➕
>
> ```tasks
> not done
> description does not include ]]
> created on <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>
> group by created
> ```

> [!MISSING]+ Projects Graveyard 🪦
>
> ```tasks
> description includes ]]
> done in <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>
> group by done
> ```

> [!MISSING]+ Tasks Graveyard 🪦
>
> ```tasks
> description does not include ]]
> done in <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>
> group by done
> ```

> [!MISSING]+ Projects Cancelled ❌
>
> ```tasks
> description includes ]]
> cancelled on <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>
> group by filename
> ```

> [!MISSING]+ Tasks Cancelled ❌
>
> ```tasks
> description does not include ]]
> cancelled on <% moment(tp.file.title, "GGGG-[W]WW").format("GGGG-[W]WW") %>
> group by filename
> ```

## Weekly Focus 🔥 & Goals 🎯

1. `Declutter & mind dump.` (GET CLEAR)
2. `Reflect on the past week.` (GET CLEAR)
3. `Get current on goals & projects.` (GET CURRENT)
4. `Plan the week ahead.` (GET CURRENT)
5. `Think bigger.` (GET CREATIVE)

## Journal 📔

An Interesting Title :

<% await tp.file.move("/10 - Periodic Notes/" + tp.file.title) %>
