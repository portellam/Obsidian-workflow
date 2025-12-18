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

## Notes
***
<% tp.file.cursor() %>


## Inbox
***
> [!SUMMARY] FILES INBOX
> ```dataview
> LIST FROM "00 - Inbox"
> WHERE file.ctime >= date(<% previousThirtyDays %>)
> SORT file.ctime DESC
> ```

```todoist
name: Todoist Inbox
filter: "#Inbox"
```

## Retrospectives
***
### The Good


### The Bad


### The Backlog


## Interests
***
### Due Yesterday
> [!TASKDUE] INTERESTS DUE YESTERDAY
> ```tasks
> not done
> filename includes Interests
> happens on <% previousDay %>
> ```

### Do Today
> [!TASKTODO] INTERESTS DO TODAY 
> ```tasks
> not done
> filename includes Interests
> happens on <% today %>
> ```

### Do Tomorrow
> [!TASKTODONEXT] INTERESTS DO TOMORROW 
> ```tasks
> not done
> filename includes Interests
> happens on <% nextDay %>
> ```

## Tasks To Do
***
### Due Yesterday
> [!TASKDUE] TASKS DUE YESTERDAY
> ```tasks
> not done
> is not recurring
> happens on <% previousDay %>
> ```

### Do Today
> [!TASKTODO] TASKS DO TODAY
> ```tasks
> not done
> is not recurring
> happens on <% today %>
> ```

### Do Tomorrow
> [!TASKTODONEXT] TASKS DO TOMORROW 
> ```tasks
> not done
> is not recurring
> happens on <% nextDay %>
> ```

### Recurring
> [!TASKUNDONE] TASKS RECURRING 
> ```tasks
> not done
> is recurring
> happens on or before <% today %>
> ```

## Projects To Do
***
### Future
> [!TASKTODONEXT]  PROJECTS FUTURE
> ```tasks
> not done
> description includes ]]
> happens after <% nextDay %>
> group by happens
> ```

### Waiting
> [!DONE] PROJECTS WAITING
> ```tasks
> not done
> tags include #waiting
> ```

### Delegated
> [!task] PROJECTS DELEGATED
> Contents] 
> ```tasks
> not done
> tags include #delegated
> ```

## Tasks Log
***
### New
> [!TASKTODO] TASKS NEW
> ```tasks
> not done
> description does not include ]]
> created on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

### Done
> [!TASKDONE] TASKS DONE 
> ```tasks
> description does not include ]]
> done on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```


### Undone
> [!TASKUNDONE] TASKS UNDONE 
> ```tasks
> description does not include ]]
> cancelled on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

## Projects Log
***
### New
> [!TASKTODO] PROJECTS NEW 
> ```tasks
> not done
> description does include ]]
> created on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

### Done
> [!TASKDONE] PROJECTS DONE 
> ```tasks
> description does include ]]
> done on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```

### Undone
> [!taskundone] PROJECTS UNDONE
> ```tasks
> description does include ]]
> cancelled on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
> group by filename
> ```
***