<!-- deno-fmt-ignore-file -->

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this
project adheres to [Semantic Versioning](http://semver.org/).

## [0.13.1] - Unreleased
### Fixed
- Print title on empty pages if it's defined in the front matter.

## [0.13.0] - 2025-05-07
### Changed
- Support for Lume 3.

## [0.12.2] - 2025-03-05
### Fixed
- Menu caret icons in Chromium browsers.
- Theme icon in mobile.

## [0.12.1] - 2025-01-13
### Fixed
- Menu CSS tweaks.

## [0.12.0] - 2025-01-10
### Added
- Logo field in the CMS.
- Detect order items from the filename prefix (like `1.page.md`).

### Changed
- Breaking: moved the `logo` variable to `_data.yml` file.
- Breaking: pages are sorted by `order`, `title` and `basename` (in this order).
- CMS: uploads is recursive and more extensions are detected.
- Dropdown caret in the menu has moved to the right.

### Removed
- Home document in the CMS. It's already in Pages collection.

### Fixed
- Make the scroll more stable
- Improved some styles.

## [0.11.1] - 2024-09-16
### Fixed
- Menu when the wiki is hosted in a subdirectory.
- Updated dependencies.

## [0.11.0] - 2024-09-10
### Added
- Support for Lume 2.3.2
- Support for multilanguage sites, with the option `languages` and `languageNames`.
- New variable `hide_menu` to hide a page from the main menu.

## [0.10.1] - 2024-08-30
### Fixed
- Updated dependencies.

## [0.10.0] - 2024-08-30
This version only works in Lume 1.3.

### Changed
- Replaced static menu with the new `tree-menu` web component for build performance.
- Addapt to a BREAKING CHANGE introduced in Lume 1.3.

### Removed
- The default value of `date` was `Git Last Modified`.
  It was removed because affects the performance in large sites.

## [0.9.3] - 2024-08-12
### Added
- Settings to CMS to configure a default extra_head and language.
- New option to include additional links in the navbar.

## [0.9.2] - 2024-08-08
### Added
- Fix passing options to plugins.

## [0.9.1] - 2024-08-08
### Added
- Option to customize the favicon.

## [0.9.0] - 2024-08-01
### Changed
- Ability to collapse/expande tree nodes [#9]
- Fixed sort menu items [#8]
- Menu appearance:
  - Replaced folder icons with carets.
  - Menu is sticky on desktop.
  - Changed colors and spaces.

### Fixed
- Breadcrumb with index pages without titles.

## [0.8.2] - 2024-05-01
### Changed
- Added `language` attribute to `html` element [#6].

## [0.8.1] - 2024-03-29
### Changed
- Updated `@lumeland/ds` and import it from unpkg CDN.
- Use import map for LumeCMS.
- Removed index.md, 404.md and favicon.svg from remote files.
  They are copied by init script.

## [0.8.0] - 2024-03-22
### Added
- CMS configuration.
- Favicon plugin to generate the favicons from `favicon.svg` file.

### Removed
- Archetypes. Use the CMS instead.

### Fixed
- Error rendering the menu if the wiki is empty.
- Aside menu tweaks and fixes.
- Updated ds.

## [0.7.1] - 2024-03-20
### Added
- Support for [markdown alerts](https://github.com/orgs/community/discussions/16925).

### Fixed
- Updated `@lumeland/ds` to v0.5.1.
- Menu style tweaks.

## [0.7.0] - 2024-03-19
### Added
- Theme switcher button.

### Changed
- Updated `@lumeland/ds` to v0.5, which provides several improvements like:
  - Inter font upgraded to v4.
  - Improved code color syntax.
  - Fixed pagination layout.
  - Several color and spacing fixes.

## [0.6.2] - 2024-03-19
### Removed
- Removed demo folder.

### Fixed
- Hide footer if `it.repo` is undefined.

## [0.6.1] - 2024-01-08
### Changed
- `extra_head` is merged as `stringArray`.

### Fixed
- Added missing `meta` tags to the head [#4].
- Added default favicon and canonical link to the head.

## [0.6.0] - 2023-12-23
### Changed
- Upgrade to Lume 2.0.0
- Update Lume DS

## [0.5.0] - 2023-09-21
### Added
- Allow to order the pages in the menu with the `order` value.
- Allow to include a logo in the link to the homepage in the menu.

### Changed
- The title of the table of contents is "On this page".

### Fixed
- Updated `@lumeland/ds` to the latest version.

## [0.4.0] - 2023-07-31
### Added
- `extra_head` variable to insert additional code in the page `head` (like styles or scripts) [#2]
- Footnotes.

### Fixed
- Removed pinned version of `pagefind`.

## [0.3.0] - 2023-07-29
### Added
- Table of contents in wide screens.

### Changed
- Styles of the home link in the menu.

### Fixed
- `<title>` element with untitled pages.

## [0.2.0] - 2023-07-06
### Changed
- The minimum version of Lume supported is 1.18.1
- Improved menu design
- Switch to Vento template engine (replacing Nunjucks).

## [0.1.1] - 2023-03-21
### Fixed
- Upgrade to Lume 1.16.0

## [0.1.0] - 2023-01-29
First version

[#2]: https://github.com/lumeland/theme-simple-wiki/issues/2
[#4]: https://github.com/lumeland/theme-simple-wiki/issues/4
[#6]: https://github.com/lumeland/theme-simple-wiki/issues/6
[#8]: https://github.com/lumeland/theme-simple-wiki/issues/8
[#9]: https://github.com/lumeland/theme-simple-wiki/issues/9

[0.13.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.13.0...HEAD
[0.13.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.12.2...v0.13.0
[0.12.2]: https://github.com/lumeland/theme-simple-wiki/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.11.1...v0.12.0
[0.11.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.9.3...v0.10.0
[0.9.3]: https://github.com/lumeland/theme-simple-wiki/compare/v0.9.2...v0.9.3
[0.9.2]: https://github.com/lumeland/theme-simple-wiki/compare/v0.9.1...v0.9.2
[0.9.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.8.2...v0.9.0
[0.8.2]: https://github.com/lumeland/theme-simple-wiki/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.7.1...v0.8.0
[0.7.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/lumeland/theme-simple-wiki/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/lumeland/theme-simple-wiki/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/lumeland/theme-simple-wiki/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/lumeland/theme-simple-wiki/releases/tag/v0.1.0
