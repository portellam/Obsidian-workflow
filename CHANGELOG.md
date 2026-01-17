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

- [x] Added folders:
	- Excald

- [x] Changed folder names with new number prefixes.
  - Grouped by kind.
  - Sorted by most frequent and least frequent user interaction.
  - Prefixes:
    - `0x` == Inbox and *PARA.*
    - `1x` == periodic notes
    - `2x` == Core and community plugin folders.
    - `3x` == Community plugin folders only.
    - between `3x` and `8x` == reserved for future use or by end user.
    - `8x` == non-note files, grouped by kind. Reserved for potential implementation of *Git LFS.*
    - `98` == template notes.
    - `99` == program language script files (typically *JavaScript*).

- [x] Implemented categories:
  - Replaces tags for *PARA* and periodic note folders.
  - Allows for easier sorting.
  - Enables any plugin which sorts files to more accurately triage and organize said files.
  - Notes can be categorized, but have empty tags.

- [x] Periodic notes:
  - Atomized folders given type.



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

- [x] Renamed numbered folders, prefixed `0`.

- [x] Renamed folders (including, but not limited to):
  - Canvas
  - Scripts
  - Templates

- [x] Refactored README.

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

---

<!-- BACKLINKS -->
<p align="right">
  Click <a href="#top">here</a> to return to the top of the page.
</p>