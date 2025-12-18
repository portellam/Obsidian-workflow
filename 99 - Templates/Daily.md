---
title: <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
date: <% moment(tp.file.creation_date()).format("YYYY-MM-DD HH:mm:ss") %>
lastmod: <% moment(tp.file.creation_date()).format("YYYY-MM-DD HH:mm:ss") %>
categories: daily
tags:
aliases:
share: false
---
<%*
const today = tp.file.title;
const previousDay = moment(today, "YYYY-MM-DD").subtract(1, 'd').format("YYYY-MM-DD");
const nextDay = moment(today, "YYYY-MM-DD").add(1, 'd').format("YYYY-MM-DD");
const previousThirtyDays = moment(today, "YYYY-MM-DD").subtract(30, 'd').format("YYYY-MM-DD");

let folder = "11 - Daily";

if (tp.frontmatter.categories === "archive") folder = "04 - Archives";
else if (tp.frontmatter.categories === "resource") folder = "03 - Resources";
else if (tp.frontmatter.categories === "area") folder = "02 - Areas";
else if (tp.frontmatter.categories === "project") folder = "01 - Projects";
else if (tp.frontmatter.categories === "inbox") folder = "00 - Inbox";
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
> is not recurring
> (path includes "11 - Daily") OR (path includes "12 - Weekly") OR (path includes "13 - Monthly") OR (path includes "14 - Quarterly") OR (path includes "15 - Yearly")
> (heading includes Habits) AND (heading includes Good)
> group by function '%%' + (task.heading.includes("Good Yearly Habits") ? "1" : task.heading.includes("Good Quarterly Habits") ? "2" : task.heading.includes("Good Monthly Habits") ? "3" : task.heading.includes("Good Weekly Habits") ? "4" : task.heading.includes("Good Daily Habits") ? "5" : "6") + '%%' + task.heading + " > " + task.file.filenameWithoutExtension + " > " + task.tags
> ```

> [!RED]+ Bad Habits
> ```tasks
> not done
> is not recurring
> (path includes "11 - Daily") OR (path includes "12 - Weekly") OR (path includes "13 - Monthly") OR (path includes "14 - Quarterly") OR (path includes "15 - Yearly")
> (heading includes Habits) AND (heading includes Bad)
> group by function '%%' + (task.heading.includes("Bad Yearly Habits") ? "1" : task.heading.includes("Bad Quarterly Habits") ? "2" : task.heading.includes("Bad Monthly Habits") ? "3" : task.heading.includes("Bad Weekly Habits") ? "4" : task.heading.includes("Bad Daily Habits") ? "5" : "6") + '%%' + task.heading + " > " + task.file.filenameWithoutExtension + " > " + task.tags
> ```
### Good Daily Habits



### Bad Daily Habits



## Kanban Board
___
> [!RED] To Do
> ```tasks
> not done
> is not recurring
> path includes "92 - Kanban Boards"
> filename includes 00 - Kanban Board
> heading includes To Do
> group by heading
> ```

> [!ORANGE] Doing
> ```tasks
> not done
> is not recurring
> filename includes 00 - Kanban Board
> heading includes Doing
> group by heading
> ```

> [!YELLOW] Waiting
> ```tasks
> not done
> is not recurring
> filename includes 00 - Kanban Board
> heading includes Waiting
> group by heading
> ```

> [!GREEN] Done
> ```tasks
> not done
> is not recurring
> filename includes 00 - Kanban Board
> heading includes Done
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