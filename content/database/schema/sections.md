---
title: Sections
---

The `Sections` table contains a list of all the different sections, per [composition](compositions). Every section must have a single [composition](compositions).

## Columns

### `id`

The unique identifier of the section.

| Type    | Constraints |
| ------- | ----------- |
| integer | Primary Key |

### `name_english`

The name of the section, in English.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |

### `name_gurmukhi`

The name of the section, in Gurmukhi, ASCII representation.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |

### `description`

The description of the section.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |

### `start_page`

The physical "page" from the source that this section begins on.

| Type    | Constraints |
| ------- | ----------- |
| integer | Not Null    |

### `end_page`

The physical "page" from the source that this section ends on.

| Type    | Constraints |
| ------- | ----------- |
| integer | Not Null    |

### `composition_id`

The unique identifier of the [composition](compositions) that this section belongs to.

| Type    | Constraints                                                      |
| ------- | ---------------------------------------------------------------- |
| integer | Foreign Key ([Compositions.id](compositions#id)), <br/> Not Null |