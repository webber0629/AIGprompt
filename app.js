// ==================== 提示詞選項數據庫 ====================
const promptOptions = {
    style: [
        { id: 'realistic', name: '寫實攝影', prompt: 'photorealistic, highly detailed', description: '真實照片風格' },
        { id: 'anime', name: '動漫風格', prompt: 'anime style, manga art', description: '日式動漫' },
        { id: 'watercolor', name: '水彩畫', prompt: 'watercolor painting, soft brushstrokes', description: '柔和水彩' },
        { id: 'oil', name: '油畫', prompt: 'oil painting, classical art', description: '古典油畫' },
        { id: 'digital', name: '數位藝術', prompt: 'digital art, modern illustration', description: '現代數位' },
        { id: 'cyberpunk', name: '賽博朋克', prompt: 'cyberpunk style, neon lights, futuristic', description: '未來霓虹' },
        { id: 'steampunk', name: '蒸汽朋克', prompt: 'steampunk, Victorian era, mechanical', description: '維多利亞機械' },
        { id: 'minimalist', name: '極簡主義', prompt: 'minimalist, clean design, simple', description: '簡潔設計' },
        { id: 'fantasy', name: '奇幻風格', prompt: 'fantasy art, magical, ethereal', description: '魔幻夢境' },
        { id: 'sketch', name: '素描', prompt: 'pencil sketch, hand-drawn', description: '手繪素描' },
        { id: 'pixel', name: '像素藝術', prompt: 'pixel art, 8-bit style, retro', description: '復古像素' },
        { id: 'comic', name: '漫畫風格', prompt: 'comic book style, bold lines', description: '美式漫畫' }
    ],
    
    camera: [
        { id: 'closeup', name: '特寫', prompt: 'close-up shot', description: '近距離拍攝' },
        { id: 'medium', name: '中景', prompt: 'medium shot', description: '半身視角' },
        { id: 'full', name: '全景', prompt: 'full shot, wide view', description: '完整畫面' },
        { id: 'wide', name: '廣角', prompt: 'wide angle lens', description: '廣闊視野' },
        { id: 'aerial', name: '鳥瞰', prompt: 'aerial view, top-down', description: '俯視角度' },
        { id: 'low', name: '仰視', prompt: 'low angle shot, looking up', description: '由下往上' },
        { id: 'eye', name: '平視', prompt: 'eye level shot', description: '水平視角' },
        { id: 'dutch', name: '荷蘭角', prompt: 'dutch angle, tilted', description: '傾斜構圖' },
        { id: 'macro', name: '微距', prompt: 'macro photography, extreme close-up', description: '超近特寫' },
        { id: 'fisheye', name: '魚眼', prompt: 'fisheye lens, distorted perspective', description: '扭曲視角' }
    ],
    
    composition: [
        { id: 'rule-thirds', name: '三分法', prompt: 'rule of thirds composition', description: '經典構圖' },
        { id: 'symmetry', name: '對稱構圖', prompt: 'symmetrical composition', description: '平衡美感' },
        { id: 'golden', name: '黃金比例', prompt: 'golden ratio composition', description: '完美比例' },
        { id: 'frame', name: '框架構圖', prompt: 'framed composition', description: '框中畫面' },
        { id: 'leading', name: '引導線', prompt: 'leading lines composition', description: '視線引導' },
        { id: 'centered', name: '中心構圖', prompt: 'centered composition', description: '居中對稱' },
        { id: 'diagonal', name: '對角線', prompt: 'diagonal composition, dynamic', description: '動態張力' },
        { id: 'negative', name: '留白', prompt: 'negative space, minimalist composition', description: '空間美學' }
    ],
    
    lighting: [
        { id: 'natural', name: '自然光', prompt: 'natural lighting, soft daylight', description: '柔和日光' },
        { id: 'golden', name: '金色時刻', prompt: 'golden hour lighting, warm glow', description: '黃昏暖光' },
        { id: 'blue', name: '藍調時刻', prompt: 'blue hour lighting, cool tones', description: '清晨冷調' },
        { id: 'dramatic', name: '戲劇性光線', prompt: 'dramatic lighting, high contrast', description: '強烈對比' },
        { id: 'soft', name: '柔光', prompt: 'soft diffused lighting', description: '漫射柔和' },
        { id: 'backlight', name: '背光', prompt: 'backlighting, rim light', description: '輪廓光' },
        { id: 'studio', name: '攝影棚光', prompt: 'studio lighting, professional', description: '專業打光' },
        { id: 'neon', name: '霓虹燈', prompt: 'neon lighting, vibrant colors', description: '鮮豔霓虹' },
        { id: 'candle', name: '燭光', prompt: 'candlelight, warm ambient', description: '溫暖氛圍' },
        { id: 'moonlight', name: '月光', prompt: 'moonlight, ethereal glow', description: '月色朦朧' }
    ],
    
    mood: [
        { id: 'dreamy', name: '夢幻', prompt: 'dreamy atmosphere, surreal', description: '超現實感' },
        { id: 'mysterious', name: '神秘', prompt: 'mysterious mood, enigmatic', description: '神秘氣息' },
        { id: 'cozy', name: '溫馨', prompt: 'cozy atmosphere, warm and inviting', description: '溫暖舒適' },
        { id: 'epic', name: '史詩', prompt: 'epic mood, grand scale', description: '宏偉壯闊' },
        { id: 'melancholic', name: '憂鬱', prompt: 'melancholic mood, nostalgic', description: '懷舊憂傷' },
        { id: 'energetic', name: '活力', prompt: 'energetic, vibrant and dynamic', description: '充滿活力' },
        { id: 'peaceful', name: '寧靜', prompt: 'peaceful atmosphere, serene', description: '平和安詳' },
        { id: 'dark', name: '黑暗', prompt: 'dark mood, ominous', description: '陰暗不祥' },
        { id: 'romantic', name: '浪漫', prompt: 'romantic atmosphere, intimate', description: '浪漫親密' },
        { id: 'playful', name: '俏皮', prompt: 'playful mood, whimsical', description: '輕鬆有趣' }
    ],
    
    color: [
        { id: 'warm', name: '暖色調', prompt: 'warm color palette, orange and red tones', description: '橙紅暖調' },
        { id: 'cool', name: '冷色調', prompt: 'cool color palette, blue and green tones', description: '藍綠冷調' },
        { id: 'monochrome', name: '單色', prompt: 'monochromatic, black and white', description: '黑白灰階' },
        { id: 'vibrant', name: '高飽和度', prompt: 'vibrant colors, highly saturated', description: '鮮豔飽和' },
        { id: 'muted', name: '低飽和度', prompt: 'muted colors, desaturated', description: '柔和淡雅' },
        { id: 'pastel', name: '粉彩色', prompt: 'pastel colors, soft hues', description: '柔和粉色' },
        { id: 'neon', name: '霓虹色', prompt: 'neon colors, fluorescent', description: '螢光亮色' },
        { id: 'earth', name: '大地色', prompt: 'earth tones, natural colors', description: '自然色系' },
        { id: 'complementary', name: '互補色', prompt: 'complementary colors, contrasting', description: '對比配色' }
    ],
    
    detail: [
        { id: 'high-detail', name: '高細節', prompt: 'highly detailed, intricate', description: '精緻細膩' },
        { id: 'soft-focus', name: '柔焦', prompt: 'soft focus, gentle blur', description: '柔和模糊' },
        { id: 'depth', name: '景深', prompt: 'shallow depth of field, bokeh', description: '背景虛化' },
        { id: 'motion', name: '動態模糊', prompt: 'motion blur, dynamic movement', description: '動感效果' },
        { id: 'grain', name: '顆粒感', prompt: 'film grain, textured', description: '膠片質感' },
        { id: 'sharp', name: '銳利', prompt: 'sharp focus, crisp details', description: '清晰銳利' },
        { id: 'texture', name: '質感', prompt: 'rich textures, tactile', description: '豐富紋理' },
        { id: 'glow', name: '光暈', prompt: 'glowing effect, luminous', description: '發光效果' }
    ]
};

// ==================== 狀態管理 ====================
let selectedOptions = {
    style: [],
    camera: [],
    composition: [],
    lighting: [],
    mood: [],
    color: [],
    detail: []
};

// ==================== DOM 元素 ====================
const tabButtons = document.querySelectorAll('.tab-btn');
const optionGroups = document.querySelectorAll('.option-group');
const previewContent = document.getElementById('preview-content');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const toast = document.getElementById('toast');
const selectionCount = document.getElementById('selection-count');
const charCount = document.getElementById('char-count');

// ==================== 初始化 ====================
function init() {
    renderAllOptions();
    setupEventListeners();
}

// ==================== 渲染選項 ====================
function renderAllOptions() {
    Object.keys(promptOptions).forEach(category => {
        const container = document.getElementById(`${category}-options`);
        if (container) {
            container.innerHTML = promptOptions[category].map(option => `
                <div class="option-card" data-category="${category}" data-id="${option.id}">
                    <div class="option-name">${option.name}</div>
                    <div class="option-description">${option.description}</div>
                </div>
            `).join('');
        }
    });
}

// ==================== 事件監聽 ====================
function setupEventListeners() {
    // 標籤頁切換
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            switchTab(category);
        });
    });
    
    // 選項卡片點擊
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.option-card');
        if (card) {
            toggleOption(card);
        }
    });
    
    // 複製按鈕
    copyBtn.addEventListener('click', copyPrompt);
    
    // 清除按鈕
    clearBtn.addEventListener('click', clearAllSelections);
}

// ==================== 標籤頁切換 ====================
function switchTab(category) {
    // 更新標籤按鈕狀態
    tabButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 更新選項組顯示
    optionGroups.forEach(group => {
        if (group.dataset.category === category) {
            group.classList.add('active');
        } else {
            group.classList.remove('active');
        }
    });
}

// ==================== 選項切換 ====================
function toggleOption(card) {
    const category = card.dataset.category;
    const optionId = card.dataset.id;
    
    // 切換選中狀態
    card.classList.toggle('selected');
    
    // 更新選擇狀態
    const index = selectedOptions[category].indexOf(optionId);
    if (index > -1) {
        selectedOptions[category].splice(index, 1);
    } else {
        selectedOptions[category].push(optionId);
    }
    
    // 更新預覽
    updatePreview();
}

// ==================== 更新預覽 ====================
function updatePreview() {
    const promptParts = [];
    let totalSelections = 0;
    
    // 收集所有選中的提示詞
    Object.keys(selectedOptions).forEach(category => {
        selectedOptions[category].forEach(optionId => {
            const option = promptOptions[category].find(opt => opt.id === optionId);
            if (option) {
                promptParts.push(option.prompt);
                totalSelections++;
            }
        });
    });
    
    // 生成最終提示詞
    const finalPrompt = promptParts.join(', ');
    
    // 更新預覽內容
    if (finalPrompt) {
        previewContent.innerHTML = `<p>${finalPrompt}</p>`;
    } else {
        previewContent.innerHTML = '<p class="preview-placeholder">請選擇選項來生成提示詞...</p>';
    }
    
    // 更新統計信息
    selectionCount.textContent = `已選擇: ${totalSelections} 項`;
    charCount.textContent = `字數: ${finalPrompt.length}`;
}

// ==================== 複製提示詞 ====================
async function copyPrompt() {
    const promptText = Array.from(previewContent.querySelectorAll('p'))
        .map(p => p.textContent)
        .join('\n');
    
    if (!promptText || promptText.includes('請選擇選項')) {
        showToast('請先選擇一些選項！', false);
        return;
    }
    
    try {
        await navigator.clipboard.writeText(promptText);
        showToast('提示詞已複製到剪貼板！', true);
    } catch (err) {
        // 備用方案：使用舊的複製方法
        const textarea = document.createElement('textarea');
        textarea.value = promptText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            showToast('提示詞已複製到剪貼板！', true);
        } catch (err) {
            showToast('複製失敗，請手動複製', false);
        }
        
        document.body.removeChild(textarea);
    }
}

// ==================== 清除所有選擇 ====================
function clearAllSelections() {
    // 重置選擇狀態
    Object.keys(selectedOptions).forEach(category => {
        selectedOptions[category] = [];
    });
    
    // 移除所有選中樣式
    document.querySelectorAll('.option-card.selected').forEach(card => {
        card.classList.remove('selected');
    });
    
    // 更新預覽
    updatePreview();
    
    showToast('已清除所有選擇', true);
}

// ==================== 顯示提示訊息 ====================
function showToast(message, isSuccess = true) {
    const toastText = toast.querySelector('.toast-text');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastText.textContent = message;
    toastIcon.textContent = isSuccess ? '✓' : '⚠';
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== 啟動應用 ====================
init();
