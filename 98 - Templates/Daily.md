---
title: <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
date: <% moment(tp.file.creation_date()).format("YYYY-MM-DD HH:mm:ss") %>
lastmod: <% moment(tp.file.creation_date()).format("YYYY-MM-DD HH:mm:ss") %>
categories: daily
tags:
aliases:
share: false
---
# Daily
<%*
const today = tp.file.title;
const previousDay = moment(today, "YYYY-MM-DD").subtract(1, 'd').format("YYYY-MM-DD");
const nextDay = moment(today, "YYYY-MM-DD").add(1, 'd').format("YYYY-MM-DD");
const previousThirtyDays = moment(today, "YYYY-MM-DD").subtract(30, 'd').format("YYYY-MM-DD");

const folderMap = {
    archive: "04 - Archives",
    resource: "03 - Resources",
    area: "02 - Areas",
    project: "01 - Projects",
    inbox: "00 - Inbox",
    daily: "10 - Daily"
};

const folder = folderMap[tp.frontmatter.categories] || "10 - Daily";
await tp.file.move(`${folder}/${tp.file.title}`);
%># [[<% today %>]]
___
## Notes
___
<% tp.file.cursor() %>





## Inbox
___
> [!SUMMARY] Files Inbox
> ```dataview
> LIST FROM "00 - Inbox"
> WHERE file.ctime >= date(<% previousThirtyDays %>)
> SORT file.ctime DESC
> ```
------
```todoist
name: Todoist Inbox
filter: "#Inbox"
```
## Habits
___
> [!GREEN]+ Good Habits
> ```tasks
> not done
> is recurring
> (heading includes Bad) AND (heading includes Habits) AND ((heading includes Daily) OR (heading includes Weekly) OR (heading includes Monthly) OR (heading includes Quarterly) OR (heading includes Yearly))
> ```

> [!RED]+ Bad Habits
> ```tasks
> not done
> is recurring
> (heading includes Bad) AND (heading includes Habits) AND ((heading includes Daily) OR (heading includes Weekly) OR (heading includes Monthly) OR (heading includes Quarterly) OR (heading includes Yearly))
> ```
### Good Daily Habits



### Bad Daily Habits



## Kanban Board
___
> [!RED] To Do
> ```tasks
> not done
> is not recurring
> heading includes TO DO
> ```

> [!ORANGE] Doing
> ```tasks
> is not recurring
> heading includes DOING
> ```

> [!YELLOW] Waiting
> ```tasks
> is not recurring
> heading includes WAITING
> ```

> [!GREEN] Done
> ```tasks
> is not recurring
> heading includes DONE
> group by heading
> ```
## Tasks
___
### To Do
> [!RED] Yesterday's Tasks
> ```tasks
> not done
> is not recurring
> happens on <% previousDay %>
> ```

> [!ORANGE] Today's Tasks
> ```tasks
> not done
> is not recurring
> happens on <% today %>
> ```

> [!YELLOW] Tomorrow's Tasks
> ```tasks
> not done
> is not recurring
> happens on <% nextDay %>
> ```

> [!PINK] Habitual Tasks
> ```tasks
> not done
> is recurring
> happens on or before <% today %>
> ```
### To Review
> [!YELLOW] New Tasks
> ```tasks
> not done
> description does not include ]]
> created on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

> [!PINK] Cancelled Tasks
> ```tasks
> description does not include ]]
> cancelled on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

> [!GREEN] Done Tasks 
> ```tasks
> description does not include ]]
> done on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```
## Projects
___
### To Do
> [!RED]  Future Projects
> ```tasks
> not done
> description includes ]]
> happens after <% nextDay %>
> group by happens
> ```

> [!ORANGE] Waiting Projects
> ```tasks
> not done
> tags include #waiting
> ```

> [!YELLOW] Delegated Projects
> ```tasks
> not done
> tags include #delegated
> ```
### To Review
> [!YELLOW] New Projects
> ```tasks
> not done
> description does include ]]
> created on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

> [!PINK] Cancelled Projects
> ```tasks
> description does include ]]
> cancelled on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

> [!GREEN] Done Projects
> ```tasks
> description does include ]]
> done on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```
___