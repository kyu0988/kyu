// おみくじデータ
const fortuneData = {
    '大吉': {
        emoji: '🌟',
        level: '大吉 (Daikichi - Great Fortune)',
        general: ['素晴らしい一日になるでしょう', '願い事が叶う兆しです', '全てが順調に進みます'],
        love: ['運命の出会いがあるかもしれません', '愛する人との絆が深まります', '告白には最適な日です'],
        money: ['思わぬ収入があるかも', '投資のチャンスです', '金運に恵まれています'],
        health: ['体調は絶好調です', '新しい運動を始めるのに最適', '健康面での心配はありません'],
        colors: ['金色', '紫色', '赤色', '白色'],
        advice: [
            '積極的に行動することで、より多くのチャンスを掴めるでしょう。今日はあなたの直感を信じて前進してください。',
            '周りの人に感謝の気持ちを伝えましょう。幸運は分かち合うことでさらに大きくなります。',
            '新しいことに挑戦する絶好の日です。恐れずに一歩を踏み出してください。'
        ]
    },
    '中吉': {
        emoji: '✨',
        level: '中吉 (Chukichi - Middle Fortune)',
        general: ['良いことが起こる予感です', '努力が報われる日です', '順調な一日になるでしょう'],
        love: ['良い出会いがありそう', '相手の気持ちが分かる日', 'デートに最適な日です'],
        money: ['安定した金運です', '無駄遣いに注意', '計画的な支出を心がけて'],
        health: ['健康状態は良好です', 'バランスの取れた食事を', '適度な運動がおすすめ'],
        colors: ['青色', '緑色', 'オレンジ色', 'ピンク色'],
        advice: [
            '焦らず着実に進めば、良い結果が得られます。今日は計画的に行動しましょう。',
            '周囲とのコミュニケーションを大切にすることで、新しい発見があるかもしれません。',
            '小さな幸せに目を向けることで、心が豊かになります。'
        ]
    },
    '小吉': {
        emoji: '🌸',
        level: '小吉 (Shokichi - Small Fortune)',
        general: ['小さな幸せが訪れます', '穏やかな一日です', '地道な努力を続けましょう'],
        love: ['ゆっくりと関係が進展します', '友情から愛情へ発展するかも', '相手の話をよく聞いて'],
        money: ['堅実な金運です', '節約を心がけて', '将来への投資を考えて'],
        health: ['無理は禁物です', '休息を大切に', '規則正しい生活を'],
        colors: ['黄色', '水色', '茶色', '白色'],
        advice: [
            '今日は無理をせず、自分のペースで進みましょう。小さな一歩も大切な前進です。',
            '家族や友人との時間を大切にすることで、心の安定が得られます。',
            '今日学んだことが、将来大きな財産になるでしょう。'
        ]
    },
    '吉': {
        emoji: '🍀',
        level: '吉 (Kichi - Fortune)',
        general: ['普通の良い日です', '慎重に行動すれば吉', '焦らず進みましょう'],
        love: ['じっくり関係を深めて', '相手の気持ちを尊重して', '友人からのアドバイスが役立ちます'],
        money: ['平均的な金運です', '大きな出費は避けて', '収支のバランスを考えて'],
        health: ['体調管理に気をつけて', '規則正しい生活を心がけて', '睡眠をしっかり取りましょう'],
        colors: ['緑色', '青色', 'ベージュ色', '銀色'],
        advice: [
            '今日は基本に忠実に行動することが大切です。確実な方法を選びましょう。',
            '周りの人の意見を聞くことで、新しい視点が得られます。',
            '無理な計画よりも、実現可能な目標を立てることが成功への鍵です。'
        ]
    },
    '末吉': {
        emoji: '🌱',
        level: '末吉 (Suekichi - Future Fortune)',
        general: ['後半に良いことがあります', '我慢が必要な時期です', '努力は無駄になりません'],
        love: ['時間をかけて関係を築いて', '焦りは禁物です', 'じっくり待つことも大切'],
        money: ['慎重な金銭管理を', '衝動買いは避けて', '計画的な支出を心がけて'],
        health: ['体調に注意が必要', '無理は避けましょう', '休息を大切に'],
        colors: ['茶色', '灰色', '紺色', '白色'],
        advice: [
            '今日は準備の日と考えましょう。将来のために今できることを着実に進めてください。',
            '困難な状況でも、諦めずに続けることで道は開けます。',
            '今日の経験は、あなたを成長させる貴重な学びになるでしょう。'
        ]
    },
    '凶': {
        emoji: '☁️',
        level: '凶 (Kyo - Bad Fortune)',
        general: ['慎重に行動しましょう', '今日は無理をしない方が良いです', '明日はきっと良い日になります'],
        love: ['焦らずゆっくりと', '相手の気持ちを優先して', '今日は距離を置くのも良いかも'],
        money: ['出費が多くなりそう', '衝動買いは絶対に避けて', '財布の紐をしっかりと'],
        health: ['体調管理に十分注意', '無理は絶対に禁物', '早めの休息を取りましょう'],
        colors: ['白色', '黒色', '灰色', '青色'],
        advice: [
            '今日は大きな決断を避け、様子を見ることが賢明です。焦らず待つことも大切な選択です。',
            '困難な日こそ、周りの人に助けを求めましょう。一人で抱え込まないでください。',
            '悪い日があるからこそ、良い日の価値が分かります。今日は明日のための休息日と考えましょう。'
        ]
    },
    '大凶': {
        emoji: '⛈️',
        level: '大凶 (Daikyo - Great Bad Fortune)',
        general: ['今日は慎重に過ごしましょう', '無理な行動は避けて', '明日は必ず良くなります'],
        love: ['今日は恋愛運が低め', '焦った行動は避けて', '冷静に考える時間を持ちましょう'],
        money: ['出費に要注意', '買い物は明日以降に', '財布は家に置いていくのも一案'],
        health: ['健康面で注意が必要', '無理は絶対にしないで', 'ゆっくり休養を取りましょう'],
        colors: ['白色', '薄い青色', 'パステルカラー'],
        advice: [
            '逆境こそが人を成長させます。今日の経験は、あなたをより強くするでしょう。',
            '悪い運気の日は、自分を見つめ直す良い機会です。ゆっくりと休んで、心を整えましょう。',
            'どんな悪い日でも、必ず終わりが来ます。明日は新しい良い日の始まりです。希望を持ち続けてください。'
        ]
    }
};

const fortuneLevels = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];

// DOM要素（後で初期化）
let drawButton, retryButton, boxLid, stick, resultContainer, particlesContainer;
let isDrawing = false;

// イベントリスナー登録は DOMContentLoaded で行う
window.addEventListener('DOMContentLoaded', () => {
    drawButton = document.getElementById('drawButton');
    retryButton = document.getElementById('retryButton');
    boxLid = document.getElementById('boxLid');
    stick = document.getElementById('stick');
    resultContainer = document.getElementById('resultContainer');
    particlesContainer = document.getElementById('particles');

    if (drawButton) drawButton.addEventListener('click', drawFortune);
    if (retryButton) retryButton.addEventListener('click', resetOmikuji);
    if (stick) stick.addEventListener('click', drawFortune);

    console.log('おみくじアプリが読み込まれました！');
});

// おみくじを引く
function drawFortune() {
    if (isDrawing) return; // 二重実行防止
    isDrawing = true;

    // 安全チェック
    if (!drawButton || !boxLid || !stick || !resultContainer) {
        console.warn('必要な要素が見つかりません');
        isDrawing = false;
        return;
    }

    // アニメーション開始
    drawButton.classList.add('drawing');
    boxLid.classList.add('open');
    stick.classList.add('pulled');

    // ボタン無効化
    drawButton.disabled = true;

    // パーティクル効果
    createParticles();

    // 結果を表示（アニメーション後）
    setTimeout(() => {
        const level = getRandomFortune();
        displayResult(level);
        drawButton.style.display = 'none';
        resultContainer.classList.add('show');
    }, 1500);
}

// ランダムにおみくじを選ぶ（確率を調整）
function getRandomFortune() {
    const rand = Math.random() * 100;

    if (rand < 15) return '大吉';      // 15%
    if (rand < 35) return '中吉';      // 20%
    if (rand < 55) return '小吉';      // 20%
    if (rand < 75) return '吉';        // 20%
    if (rand < 90) return '末吉';      // 15%
    if (rand < 97) return '凶';        // 7%
    return '大凶';                      // 3%
}

// 結果を表示
function displayResult(level) {
    const data = fortuneData[level];
    if (!data) return;

    const el = (id) => document.getElementById(id);

    // タイトルとアイコン
    if (el('resultTitle')) el('resultTitle').textContent = level;
    if (el('resultEmoji')) el('resultEmoji').textContent = data.emoji;
    if (el('fortuneLevel')) el('fortuneLevel').textContent = data.level;

    // 各運勢
    if (el('generalFortune') && data.general) el('generalFortune').textContent = getRandomItem(data.general);
    if (el('loveFortune') && data.love) el('loveFortune').textContent = getRandomItem(data.love);
    if (el('moneyFortune') && data.money) el('moneyFortune').textContent = getRandomItem(data.money);
    if (el('healthFortune') && data.health) el('healthFortune').textContent = getRandomItem(data.health);

    // ラッキーカラーとナンバー
    const luckyColor = getRandomItem(data.colors || []);
    if (el('luckyColor')) {
        const colorCode = getColorCode(luckyColor);
        // サニタイズして要素を作る（XSS対策）
        const dot = document.createElement('span');
        dot.style.display = 'inline-block';
        dot.style.width = '20px';
        dot.style.height = '20px';
        dot.style.background = colorCode;
        dot.style.borderRadius = '50%';
        dot.style.marginRight = '5px';
        dot.style.verticalAlign = 'middle';
        dot.style.border = '2px solid #ddd';

        const container = el('luckyColor');
        container.textContent = '';
        container.appendChild(dot);
        const textNode = document.createTextNode(luckyColor || '');
        container.appendChild(textNode);
    }

    if (el('luckyNumber')) el('luckyNumber').textContent = Math.floor(Math.random() * 100) + 1; // 1-100

    // アドバイス
    if (el('adviceText') && data.advice) el('adviceText').textContent = getRandomItem(data.advice);

    // 結果に応じた背景色の変更
    updateBackgroundColor(level);
}

// 配列からランダムに要素を取得
function getRandomItem(array) {
    if (!Array.isArray(array) || array.length === 0) return '';
    return array[Math.floor(Math.random() * array.length)];
}

// 色の名前をカラーコードに変換
function getColorCode(colorName) {
    const colors = {
        '金色': '#FFD700',
        '紫色': '#9370DB',
        '赤色': '#FF6B6B',
        '白色': '#FFFFFF',
        '青色': '#4A90E2',
        '緑色': '#4CAF50',
        'オレンジ色': '#FF9800',
        'ピンク色': '#FF69B4',
        '黄色': '#FFEB3B',
        '水色': '#87CEEB',
        '茶色': '#A0522D',
        '銀色': '#C0C0C0',
        'ベージュ色': '#F5F5DC',
        '灰色': '#9E9E9E',
        '紺色': '#1A237E',
        '黒色': '#333333',
        '薄い青色': '#B3E5FC',
    };
    return colors[colorName] || '#FFFFFF';
}

// 背景色を更新
function updateBackgroundColor(level) {
    const body = document.body;
    const gradients = {
        '大吉': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        '中吉': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        '小吉': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        '吉': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        '末吉': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        '凶': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        '大凶': 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    };

    body.style.background = gradients[level] || body.style.background;
    body.style.transition = 'background 1s ease';
}

// パーティクルエフェクトを作成
function createParticles() {
    if (!particlesContainer) particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const colors = ['#FFD700', '#FF69B4', '#4A90E2', '#9370DB', '#FF6B6B', '#4CAF50'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight / 2 + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDelay = Math.random() * 0.5 + 's';

            particlesContainer.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 3000);
        }, i * 50);
    }
}

// リセット
function resetOmikuji() {
    // 要素をリセット
    if (resultContainer) resultContainer.classList.remove('show');

    // particles を確実にクリア
    if (particlesContainer) particlesContainer.innerHTML = '';

    setTimeout(() => {
        if (boxLid) boxLid.classList.remove('open');
        if (stick) stick.classList.remove('pulled');
        if (drawButton) drawButton.classList.remove('drawing');
        if (drawButton) {
            drawButton.style.display = 'block';
            drawButton.disabled = false;
        }

        // 背景色を元に戻す
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

        // 描画状態を解除
        isDrawing = false;
    }, 500);
}

//（loadは不要だが互換のため残す）
window.addEventListener('load', () => {
    console.log('omikuji.js loaded');
});
