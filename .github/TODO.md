obsidian-workflow TODO

# Goals
- Make it easy to journal.
  - Provide templates, with instructions, to enable a user to get to work.

- Make it easy to undo and redo backend changes.
  - `.gitignore` and commands to redo ignored files, such as `data.json` and others.

- Make it easy to be organized.
  - Have the app organize notes for the user.
  - Given metadata, sort files into folders automatically.

- Disable the paid/registered features of original repository.
  - Show how to enable these features.
  - Todoist
  - Sync

- Be stable.

- Be presentable.
  - Easy to see buttons.
  - Organized layout of buttons.

# Notes
- The daily note template has been changed.
- Q: Should a hot key or auto fill be defined for making a habit (habitual task)?
- Q: Regarding the "Habits" section, should the template...
  - Q: parse only template generated files for "Habits"?
  - Q: parse all files for "Habits"?
- Q: Given the periodic note templates' layouts (Habits, Kanban Boards, Tasks, Projects), how may we best implement Zettelkasten?
- Q: Should we expect the user to use "Periodic Notes," or use an untitled note for journaling?
  - [ ] demonstrate how to use Periodic Notes
  - [ ] explain the pros/cons of Periodic Notes, how it works?

# Known Issues

- Ribbon layout will reset after program exit.
  - Related: https://github.com/phibr0/obsidian-commander/issues/81

# Backlog
- [x] apply original license to work that isn't changed:
  - [x] scripts
- [ ] things to change to apply own license
  - [ ] content of README
  - [ ] templates?

- [ ] Screenshots
  - [ ] Periodic Notes example
  - [ ] Kanban example
  - [ ] Zettelkasten example

- [ ] How to/Usage
  - Zettelkasten
  - Atomic Notes

- [x] Add CONTRIBUTORS files.
- [x] Add GPLv3 `LICENSE.md` to project
- [ ] Add snippets?

- [ ] Add directories where necessary
  - [ ] "99 - Templates"

- [ ] Checkout earlier commits:
  - [ ] Test periodic notes.
  - [ ] Verify how scripts work.

- [x] Copy existing `LICENSE.md` (MIT) to scripts files.

- [ ] Disable paid plugins, and note these

- [ ] Fix ribbon and various icons
  - [ ] Add color
    - Color from system theme or vault theme.
  - [x] Increase sizes

- [ ] Habits
  - checked out last commit by original dev (v1.0.7)
  - "Yearly Focus 🔥 & Goals 🎯", has a heading in template.
  - "Quarterly Focus 🔥 & Goals 🎯", has a heading in template.
  - "Monthly Focus 🔥 & Goals 🎯", has a heading in template.
  - "Weekly Focus 🔥 & Goals 🎯", has a heading in template.
  - "Daily Focus 🔥 & Goals 🎯", has a heading in template.

- [ ] Structured Notes
  - [ ] Combine PARA and Zettelkasten?
  - PARA
    - action driven
  -  Zettelkasten
    - [ ] research Zettelkasten
    - atomic notes
    - thought driven

- [ ] Fix the following plugins:
  - [x] advanced tables
  - [x] omnisearch
  - [x] git
  - any other offending plugins.

- [ ] Kanban board use cases
  - [ ] Periodic Notes (00 - Kanban)
  - [ ] PARA Kanban (the project/area files themselves)

- [ ] Metadata:
  - [ ] PARA method ("project", "area", "resource", and "archive")
  - [ ] unsorted or Inbox notes ("inbox")
  - [ ] daily notes ("daily")
  - [ ] weekly notes ("weekly")
  - [ ] monthly notes ("monthly")
  - [ ] quarterly notes ("quarterly")
  - [ ] yearly notes ("yearly")
  - [ ] Categories (not tags) for the following:
    - [ ] Given the categories, output or move note(s) to directories:
	- [ ] "inbox" to "00 - Inbox"
	- [ ] "project" to "01 - Projects"
	- [ ] "area" to "02 - Areas"
	- [ ] "resource" to "03 - Resources"
	- [ ] "archives" to "04 - Archives"
	- [ ] "daily" to "11 - Daily"
	- [ ] "weekly" to "12 - Weekly"
	- [ ] "monthly" to "13 - Monthly"
	- [ ] "quarterly" to "14 - Quarterly"
	- [ ] "yearly" to "15 - Yearly"
  - [ ] Prioritize the following categories:
    - "archive" > "resource" > "area" > "project"
  - [ ] If a project is finished or stopped indefinitely, append the category "archive".

- [ ] Daily (Periodic Note):
  - [x] Create logic for "Inbox": list files in "00 - Inbox", sorted by reverse chronological order, range from today to past 30 days. 
  - [ ] Regarding the template, design a new template with the following specifications:
	- [ ] Organize by the following headers. If any headers are redundant, consolidate:
```
## Notes
## Inbox
## Habits
### Retrospective
### To Make
### To Break
## Interests
### Retrospective
### To Do
## Tasks
### Due Yesterday
### Do Today
### Do Tomorrow
### Recurring
## Projects
### Future
### Waiting
### Delegated
```

- [ ] Periodic Notes
  - [ ] Daily
  - [ ] Weekly
  - [ ] Monthly
  - [ ] Quarterly
  - [ ] Yearly

- [x] Setup themes.
  - Find theme with good visibility.

- [ ] Simplified english everywhere.
- [x] Static Ribbon placement.
- [ ] Test all plugins.
- [ ] Updated banner image showing latest changes
- [ ] Update directories.
- [ ] Update QuickAdd

- [ ] Useful CSS
  - sources:
    - https://www.xda-developers.com/css-snippets-improve-obsidian-experience/
    - https://forum.obsidian.md/t/custom-css-for-tables-5-new-styles-ready-to-use-in-your-notes/17084
	- https://github.com/Avyrra/Extended-Typography-Styles/tree/main
	- https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Kanban%20styling%20-%20background%20customized.md
	- https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets
	- https://github.com/zremboldt/obsidian-media-grid

# Change log

- `.gitattributes`
  - Resets tracking status of files, as defined in `.gitignore`.
  - No longer tracks phantom changes, date modified, etc.
  - fixed .gitignore

- `.gitignore`
  - Does track:
    - Plugin configuration and state files: `data.json`, `manifest.json`
  - Does NOT track:
    - Auto generated files, such as `main.js`.

- Directories
  - Set folder names with number prefix:
  - `00` for unsorted output or Inbox (root directory), and plugin outputs (plugin subdirectories).
	- ` - ` as delimiter
	- `01` - "04" for PARA method.
	- `40` for various community plugin output.
	- `50` for various core plugin and template output.
	- `9x` for unsorted media and templates.

- Plugins
  - Installed more core plugins.
  - Updated configurations of various plugins. #FIXME

- Ribbons (left pane icons):
  - Organized based on (best guess) of frequency of use.
  - Added [Ribbon dividers]()
  - Added `.css` snippet file, assist visibility by increasing ribbon icon sizes.
  - Fixed issue with periodic-notes, where ribbon location would reset at every start.
    - [Link](https://github.com/liamcain/obsidian-periodic-notes/issues/200)

- Themes:
  - Provide a selection of themes,
  - Added:
    - [Minimalist]()
	- [Retro98](), [RetroWindows](): for simple, easy visibility and the classic Windows experience.
  - Configured:
    - [Anuppuccin](), Minimal: light/dark themes, colored tabs and themes.

- Scripts:
  - Copied original repository's `LICENSE.md` to scripts.
  - Updated paths.

- Snippets:
  - LCARS (Library Computer Access Retrieval System) from *Star Trek: The Next Generation.* [Link](https://old.reddit.com/r/ObsidianMD/comments/1dafwb7/i_have_a_problem_leave_me_alone_with_a_ui_and/),  [Archive]()

- Workspace
  - Added [Workspaces Plus]() plugin "Manage workspace layouts".
  - Set default workspace via "Manage workspace".

## Notes

```
/*
Reddit post: https://www.reddit.com/r/ObsidianMD/comments/11n389p/i_made_a_css_snippet_to_give_your_canvas_cards_a/
My Github: https://github.com/TheKoTech
*/
.canvas img[alt~="canvas-top"] {
	position: relative;
	left: -24px;
	top: -24px;
	object-fit: cover;
	width: calc(100% + 48px);
	max-width: none;
	display: block;
	margin-bottom: -12px;
}

```