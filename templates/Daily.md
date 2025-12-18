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
%>

# [[<% previousDay %>]] | <% today %> | [[<% nextDay %>]]

## Notes
<% tp.file.cursor() %>

- [ ] review plugins, how they interact with this template.
- [ ] make similar changes to periodic notes.

## Inbox
```dataview
LIST FROM "00 - Inbox"
WHERE file.ctime >= date(<% previousThirtyDays %>)
SORT file.ctime DESC
```

## Interests

### Due Yesterday
```tasks
not done
filename includes Interests
happens on <% previousDay %>
```

### Do Today
```tasks
not done
filename includes Interests
happens on <% today %>
```

### Do Tomorrow
```tasks
not done
filename includes Interests
happens on <% nextDay %>
```

## Tasks

### Due Yesterday
```tasks
not done
is not recurring
happens on <% previousDay %>
```

### Do Today
```tasks
not done
is not recurring
happens on <% today %>
```

### Do Tomorrow
```tasks
not done
is not recurring
happens on <% nextDay %>
```

### Recurring
```tasks
not done
is recurring
happens on or before <% today %>
```

## Projects

### Future
```tasks
not done
description includes ]]
happens after <% nextDay %>
group by happens
```

### Waiting
```tasks
not done
tags include #waiting
```

### Delegated
```tasks
not done
tags include #delegated
```