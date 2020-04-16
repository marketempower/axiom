+++
date = {{ dateFormat "2006-01-02T15:00:00Z" now.UTC }}
lastmod = {{ dateFormat "2006-01-02T15:00:00Z" now.UTC }}
title = "{{ replace .TranslationBaseName "-" " " | title }}"
subtitle = "25 words / 125 chars. Used in meta data, and content summaries."
feature = "{{ .Site.Params.image.default }}"
caption = "Feature image caption and image alt text."
+++

And go...
