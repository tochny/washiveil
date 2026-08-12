import { codeToHtml } from 'shiki';

const HCL_SNIPPET = `resource "aws_security_group_rule" "api" {
  cidr_blocks = ["10.0.0.0/8"]   # code block
}`;

export async function ProseSpecimen({ h1, h2, h3 }: { h1: string; h2: string; h3: string }) {
  const highlighted = await codeToHtml(HCL_SNIPPET, {
    lang: 'hcl',
    themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
    defaultColor: false,
  });

  return (
    // Bare on the washi, exactly like a real article — no glass between ink and paper.
    <div className="prose">
        <p>
          <a href="#" className="font-mono text-[0.75rem]">&larr; Writing</a>
          <span className="font-mono text-[0.75rem] text-faint">
            &ensp;Security &middot; 2026-05-18 &middot; 12 min read
          </span>
        </p>

        <div className="spec-h1">{h1}</div>

        <h2>{h2}</h2>
        <h3>{h3}</h3>

        <p lang="en">
          A paragraph shows <strong>bold emphasis</strong>, <em>italic stress</em>,{' '}
          an <a href="#">inline link</a>, and <code>terraform plan</code> as inline code.
        </p>
        <p lang="zh-Hant">
          段落展示<strong>粗體強調</strong>、<em>Latin italic</em>、
          <a href="#">行內連結</a>與行內 <code>terraform plan</code>。
        </p>
        <p lang="ja">
          段落には<strong>太字の強調</strong>、<em>斜体</em>、
          <a href="#">インラインリンク</a>、<code>terraform plan</code> のインラインコードが並びます。
        </p>

<blockquote lang="ja">
          「引用はここに&mdash;&mdash;左側の黄櫨染は編集記号です。」
        </blockquote>

        <ul>
          <li>無序清單 unordered</li>
          <li>
            巢狀 nested:
            <ul>
              <li>第二層 second level</li>
            </ul>
          </li>
        </ul>

        <ol>
          <li>有序清單 ordered</li>
          <li>番号付きリスト numbered</li>
        </ol>

        <div dangerouslySetInnerHTML={{ __html: highlighted }} />

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>表格</th>
                <th>欄位</th>
                <th>数字</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>row 分隔 hairline</td>
                <td>内容</td>
                <td className="text-right tabular-nums">1,024</td>
              </tr>
              <tr>
                <td>最後一列無線</td>
                <td>内容</td>
                <td className="text-right tabular-nums">42</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <figure>
          <div className="grid h-28 place-items-center rounded-xl bg-foreground/6 text-xs text-faint">
            Image placeholder (rounded-xl)
          </div>
          <figcaption>figcaption &mdash; mono, centered, faint</figcaption>
        </figure>
    </div>
  );
}
