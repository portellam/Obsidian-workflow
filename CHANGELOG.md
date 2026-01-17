<!-- HEADER -->
<h1>Obsidian Workflow</h1><!-- CHANGEME -->

<!-- LOGOS -->
Download from...
</br>
</br>
&nbsp;
<sup>→</sup>
&nbsp;
<a href="https://codeberg.org/portellam/obsidian-workflow/latest/releases">  <!-- CHANGEME -->
  <img title="Codeberg" height="30" src="./.images/codeberg.org.png"/>
</a>
</br>
</br>
&nbsp;
<sup>→</sup>
&nbsp;
<a href="https://gitea.com/portellam/obsidian-workflow/latest/releases">  <!-- CHANGEME -->
  <img title="Gitea" height="30" src="./.images/gitea.com.png"/>
</a>
</br>
</br>
&nbsp;
<sup>→</sup>
&nbsp;
<a href="https://github.com/portellam/obsidian-workflow/latest/releases">  <!-- CHANGEME -->
  <img title="GitHub" height="30" src="./.images/github.com.png"/>
</a>

## Changelog

All notable changes to this project will be documented in this file.
We follow the [Semantic Versioning 2.0.0](http://semver.org/) format.

## 1.0.9 - 2026-01-17

### Added
- [x] Added community plugins:
  - *Archiver*
  - *Auto Note Mover* (disabled): alternative to *NoteMover shorcut*.
  - *NoteMover shortcut:* sorts files into folders given granular conditions.

- [x] Changed folder names with new number prefixes.
  - Grouped by kind.
  - Sorted by most frequent and least frequent user interaction.
  - Prefixes:
    - `0x` == Inbox and *PARA.*
    - `1x` == periodic notes
    - `2x` == Core and community plugin folders.
      - Nested folders for organization given per-plugin requirements (see `20 - Excalidraw`).
    - `3x` == Community plugin folders only.
    - between `3x` and `8x` == reserved for future use or by end user.
    - `8x` == non-note files, grouped by kind. Reserved for potential implementation of *Git LFS.*
      - Archives: compressed archive files.
      - Audio
      - Documents: Microsoft Word, PDFs, text files, etc.
      - Images
      - Software Apps: applications and executables (example: `.exe`).
      - Software Code: text files and source files (example: `.js`).
      - Video
    - `98` == template notes.
    - `99` == program language script files (typically *JavaScript*).

- [x] Implemented categories:
  - Replaces tags for *PARA* and periodic note folders.
  - Allows for easier sorting.
  - Enables any plugin which sorts files to more accurately triage and organize said files.
  - Notes can be categorized, but have empty tags.

- [x] Periodic note folders:
  - Atomized folders given type.

- [ ] Update README with own wording, to best of my ability.

- [ ] Default files?
  - [ ] Kanban board?
    - The original repo had Passions Backlog.
    - Kanban for Habits? Is this logical?
    - Kanban for all notes of a given type (Projects)?
    - Contextual Kanbans (given parameters)
      - Task status updated in Kanban, but set in referenced note file.

- [ ] review TODO.

- [ ] Instructions or FAQ
  - [ ] how to use (big picture).
  - [ ] how to make a periodic note.
  - [ ] how to use PARA notes.
    - [ ] Resources: Zettlekasten
  - [ ] how do my notes track what I do, and what I should track?
  - [ ] think of more to explain.

- [ ] Track tasks
  - [ ] Habits Tracker
  - [ ] Kanban boards
  - [ ] Periodic Notes

- [ ] New templates:
  - [ ] "Base"
    - A Base view within a note file.
    - To be used within a category and/or root folder.
  - [ ] Habits Tracker
  - [ ] Periodic Notes
    - [ ] Daily
    - [ ] Weekly
    - [ ] Monthly
    - [ ] Quarterly
    - [ ] Yearly

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- [x] `.releaserc`, although Actions (relevant?) are disabled at this time.

## 1.0.8 - 2025-04-05
Consecutive version of `1.0.7` from original repository, as of 2025-04-05.

> [!WARNING]
> For themes to work properly, please update your copy of Obsidian to the latest version available.

> [!WARNING]
> **If *Todoist* is not setup, the plugin will cause the vault to fail to**
> **load.** It is recommended one disables this plugin if it is to not be used.
> One may have to first load in Restricted Mode, then disable Restricted Mode,
> and finally disable said plugin.

### Added
- [x] Added core plugins:
  - *Audio Recorder*
  - *Bookmarks*
  - *Command Palette*
  - *Daily Notes*
  - *File Recovery*
  - *Markdown Importer*
  - *Templates*
  - *Word Count*
  - *Workspaces*

- [x] Renamed folders:
  - Prefixed numbered folders with `0`.
  - Folders directly used are prefixed with a number `##` and delimited by a
  hyphen ` - `. These folders are meant to be eye-catching and to be frequently
  used. Arbitrarily ordered folders by use case.
  - Folders not indirectly used are in lowercase, and appear towards the bottom
  of the vault.

- [x] Renamed folders (including, but not limited to):
  - Canvas
  - Scripts
  - Templates

### Changes
- [x] Forked from the original author's repository.
- [x] Modified customization.
- [x] Plugins: modified settings.
- [x] Refactored documentation files.
- [x] Refactored README.
- [x] Renamed folders, for better consistency.

### Deprecated
- PARA tags.

### Removed
- [x] Removed core plugins:
  - *Note Composer*
  - *Page Preview*
  - *Publish*
  - *Random Note*
  - *Slash Command*
  - *Slides*
  - *Starred*
  - *Web Viewer*
  - *ZK Prefixer*

- [x] Disabled community plugins
  - *Todoist Sync* (to hide nagging subscription notification).

- [x] Removed emoji icons and emojis within various files. These smell.

### Fixed
- [x] Added exclusions to `.gitignore`
  - Trash folder (`.trash`)

- [x] Changed date time format of periodic notes to ISO (`YYYY-MM-DD ddd`).

- [x] Various `.js`, `.json`, and other config files:
  - [x] Updated links to referenced directories and files, given changes.

- [x] Updated various plugins.



## Disclaimer


---

<!-- BACKLINKS -->
<p align="right">
  Click <a href="#top">here</a> to return to the top of the page.
</p>