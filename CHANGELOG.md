<!-- deno-fmt-ignore-file -->

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this
project adheres to [Semantic Versioning](http://semver.org/).

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
