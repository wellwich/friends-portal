import { createRoute } from 'honox/factory'

export default createRoute((c) => {
    const name = c.req.query('name') ?? 'Hono'

    return c.render(
        <div class="flex flex-col">
            <a href="/community/threads">スレッド一覧</a>
        </div>,
        { title: name }
    )
})