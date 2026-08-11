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

        <h1>{h1}</h1>

        <h2>{h2}</h2>
        <h3>{h3}</h3>

        <p lang="zh-Hant">
          段落：<strong>粗體強調</strong>、<em>Latin italic</em>、
          <a href="#">行內連結</a>、行內 <code>terraform plan</code>——
          中西混排時，全形標點與半形字元同行共存。
        </p>

                <p lang="en">
          English body text carries <strong>weighted emphasis</strong>, an{' '}
          <a href="#">inline link</a>, and <code>inline code</code> at the same rhythm.
        </p>
        <p lang="zh-Hant">
          中文段落以全形標點斷句，<strong>粗體強調</strong>、<a href="#">行內連結</a>與
          <code>行內程式碼</code>共處一行，字形由 Noto TC 統一。
        </p>
        <p lang="ja">
          日本語の段落は語節単位で折り返し、<strong>強調</strong>や<a href="#">リンク</a>、
          <code>インラインコード</code>を同じリズムで組みます。
        </p>

<blockquote>
          「引言はここに&mdash;&mdash;編輯記號是黄櫨染的左線。」
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
