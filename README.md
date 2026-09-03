# bli-bli — Blibli Seller API skill

Skill mandiri ala pola `@tts-open-toolkit`/`tts-openapi-*` dari TikTok Shop, tapi
untuk Blibli Seller API. Struktur identik dengan skill toolkit:

```
bli-bli/
├── SKILL.md          # name + description, workflow, output shape, references
├── agents/
│   └── openai.yaml   # interface config (display_name, short_description, default_prompt)
└── references/
    └── api/          # 27 kategori, 189 API doc (clean Markdown)
        ├── Product/
        ├── Order/
        ├── Settlement/
        ├── Webhook Order/
        └── ...
```

## Cara pakai (untuk agent/LLM)

Salin ke direktori skills coding-agent (mis. `.codex/skills/` atau
`.claude/skills/`), atau set langsung sebagai skill. Saat ada pertanyaan API
Blibli, skill `blibli-seller-api-guide` memandu inspect `references/api/**` lalu
cross-check ke dok resmi bila perlu.

## Update / regenerasi

Konten `references/api/` adalah **snapshot statis**. Untuk memperbarui API
Blibli, jalankan toolchain di repo `updskills`
(`tools/bulk_render_blibli.py`) — sumber manifest resmi di endpoint
`https://seller-api.blibli.com/backend/documentation/sections`, lalu re-render
ke `references/api/`. Tidak perlu mengedit manual satu-satu.
