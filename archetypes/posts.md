+++
date = {{ dateFormat "2006-01-02T15:00:00Z" now.UTC }}
lastmod = {{ dateFormat "2006-01-02T15:00:00Z" now.UTC }}
author = "default"
title = "{{ replace .TranslationBaseName "-" " " | title }}"
subtitle = "Suggested 25 words / 125 chars. Used in metadata, and content summaries."
feature = "{{ .Site.Params.image.default }}"
+++

And go...
