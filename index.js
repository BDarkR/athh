
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// --- CONFIGURATIONS ---
const configs = {
    ps: {
      stateKey: 'publicSecurityReportState',
      reportName: 'الأمن العام',
      reportHeader: 'تم استلام مهام العمليات لمنطقة ساندي وبوليتو في تمام الساعة',
      mainUnits: ["م قيادة", "درع 1", "سهم 1", "جنوب 1", "غرب 1", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"],
      secondaryAddableUnits: ["درع", "سهم", "جنوب", "غرب", "خفر", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية", "سير", "ميم", "سري", "صد", "حزم", "رمح", "ردع", "امن", "ساحل", "عزم"],
      dynamicSections: [
          { id: 'swat', title: 'سوات | S.W.A.T', reportTitle: 'سوات | S.W.A.T  :', defaultUnits: [{ name: 'حزم 1' }, { name: 'رمح 1' }] },
          { id: 'cid', title: 'البحث الجنائي', reportTitle: 'البحث الجنائي  :', defaultUnits: [{name: 'جنائي 6'}, {name: 'جنائي 7'}, {name: 'جنائي 8'}, {name: 'جنائي 9'}, {name: 'جنائي 10'}, {name: 'جنائي 11'}, {name: 'جنائي 12'}, {name: 'جنائي 13'}] },
          { id: 'drugs', title: 'مكافحة مخدرات', reportTitle: 'مكافحة مخدرات :', defaultUnits: [{name: 'مكافحة 6'}, {name: 'مكافحة 7'}, {name: 'مكافحة 8'}, {name: 'مكافحة 9'}, {name: 'مكافحة 10'}, {name: 'مكافحة 11'}, {name: 'مكافحة 12'}, {name: 'مكافحة 13'}, {name: 'مكافحة 14'}] },
          { id: 'special', title: 'المهام والواجبات الخاصة', reportTitle: 'المهام والواجبات الخاصة :', defaultUnits: [{name: 'رعد 1'}, {name: 'رعد 2'}, {name: 'رعد 3'}, {name: 'رعد 4'}, {name: 'رعد 5'}, {name: 'رعد 6'}, {name: 'عزم 1'}, {name: 'عزم 2'}, {name: 'عزم 3'}] },
          { id: 'air', title: 'دعم جوي', reportTitle: 'دعم جوي :', defaultUnits: [{name: 'شاهين 3'}, {name: 'شاهين 4'}, {name: 'شاهين 5'}, {name: 'شاهين 6'}] },
          { id: 'coast', title: 'دورة السواحل', reportTitle: 'دورة السواحل :', defaultUnits: [{ name: 'خفر' }, { name: 'امن' }, { name: 'ساحل 1' }, { name: 'ردع 1' }, { name: 'ردع 2' }] },
          { id: 'prison', title: 'المديرية العامة للسجون', reportTitle: 'نقل سجون :', aliases: ['نقل سجون'], defaultUnits: [{name: 'نقل سجون'}, {name: 'حماية 1'}, {name: 'حماية 2'}] },
          { id: 'traffic', title: 'شعبة المرور', reportTitle: 'المرور :', aliases: ['المرور'], defaultUnits: [{name: 'سير 1'}, {name: 'ميم 1'}, {name: 'سري 1'}, {name: 'صد 1'}] }
      ]
    },
    hp: {
      stateKey: 'highwayPatrolReportState',
      reportName: 'أمن الطرق',
      reportHeader: 'تم استلام مهام العمليات لأمن الطرق في تمام الساعة',
      mainUnits: ["م قيادة", "سيف 1", "رصد 1", "ساهر 1", "امان 1", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"],
      secondaryAddableUnits: ["سيف", "رصد", "ساهر", "امان", "خفر", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية", "سير", "ميم", "سري", "صد", "حزم", "رمح", "ردع", "امن", "ساحل", "خدمات", "عزم"],
      dynamicSections: [
          { id: 'swat', title: 'سوات | S.W.A.T', reportTitle: 'سوات | S.W.A.T  :', defaultUnits: [{ name: 'حزم 1' }, { name: 'رمح 1' }] },
          { id: 'cid', title: 'البحث الجنائي', reportTitle: 'البحث الجنائي  :', defaultUnits: [{name: 'جنائي 6'}, {name: 'جنائي 7'}, {name: 'جنائي 8'}, {name: 'جنائي 9'}, {name: 'جنائي 10'}, {name: 'جنائي 11'}, {name: 'جنائي 12'}, {name: 'جنائي 13'}] },
          { id: 'drugs', title: 'مكافحة مخدرات', reportTitle: 'مكافحة مخدرات :', defaultUnits: [{name: 'مكافحة 6'}, {name: 'مكافحة 7'}, {name: 'مكافحة 8'}, {name: 'مكافحة 9'}, {name: 'مكافحة 10'}, {name: 'مكافحة 11'}, {name: 'مكافحة 12'}, {name: 'مكافحة 13'}, {name: 'مكافحة 14'}] },
          { id: 'special', title: 'المهام والواجبات الخاصة', reportTitle: 'المهام والواجبات الخاصة :', defaultUnits: [{name: 'شهاب 1'}, {name: 'شهاب 2'}, {name: 'شهاب 3'}, {name: 'شهاب 4'}, {name: 'شهاب 5'}, {name: 'شهاب 6'}, {name: 'عزم 1'}, {name: 'عزم 2'}, {name: 'عزم 3'}] },
          { id: 'air', title: 'دعم جوي', reportTitle: 'دعم جوي :', defaultUnits: [{name: 'صقر 3'}, {name: 'صقر 4'}, {name: 'صقر 5'}, {name: 'صقر 6'}] },
          { id: 'coast', title: 'دورة السواحل', reportTitle: 'دورة السواحل :', defaultUnits: [{ name: 'خفر' }, { name: 'امن' }, { name: 'ساحل 1' }, { name: 'ردع 1' }, { name: 'ردع 2' }] },
          {
            id: 'road_services',
            title: 'خدمات الطرق',
            reportTitle: 'خدمات الطرق :',
            defaultUnits: [
              { name: 'مسؤول نقاط التحكم' },
              { name: '_H_قسم مسؤول تحكم' },
              { name: 'مسؤول تحكم 1' },
              { name: '_H_قسم تحكم 1' },
              { name: 'تحكم 10' },
              { name: '_H_قسم تحكم 2' },
              { name: 'تحكم 20' },
              { name: '_H_قسم تحكم 3' },
              { name: 'تحكم 30' },
              { name: '_H_قسم تحكم 4' },
              { name: 'تحكم 40' },
              { name: '_H_قسم تحكم 5' },
              { name: 'تحكم 50' },
              { name: '_H_قسم تحكم 6' },
              { name: 'تحكم 60' },
              { name: '_H_قسم تحكم 7' },
              { name: 'تحكم 70' },
            ],
            expandableGroups: [
              { prefix: 'مسؤول تحكم ', range: [2, 7] },
              { prefix: 'تحكم ', range: [11, 15] },
              { prefix: 'تحكم ', range: [21, 25] },
              { prefix: 'تحكم ', range: [31, 35] },
              { prefix: 'تحكم ', range: [41, 45] },
              { prefix: 'تحكم ', range: [51, 55] },
              { prefix: 'تحكم ', range: [61, 65] },
              { prefix: 'تحكم ', range: [71, 75] },
            ]
          },
          { id: 'prison', title: 'المديرية العامة للسجون', reportTitle: 'نقل سجون :', aliases: ['نقل سجون'], defaultUnits: [{name: 'نقل سجون'}, {name: 'حماية 1'}, {name: 'حماية 2'}] },
          { id: 'traffic', title: 'شعبة المرور', reportTitle: 'المرور :', aliases: ['المرور'], defaultUnits: [{name: 'سير 1'}, {name: 'ميم 1'}, {name: 'سري 1'}, {name: 'صد 1'}] }
      ]
    }
  };

// --- GLOBAL STATE ---
let activeApp = 'ps'; // 'ps' or 'hp'
let seq = 1;

// --- CORE FUNCTIONS ---
function fillTime(prefix) {
  for (const id of ["startHour", "endHour"]) {
    const sel = document.getElementById(`${prefix}-${id}`);
    if(!sel) continue;
    sel.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      const o = document.createElement("option");
      o.value = o.text = String(i).padStart(2, "0");
      sel.appendChild(o);
    }
  }
  for (const id of ["startMin", "endMin"]) {
    const sel = document.getElementById(`${prefix}-${id}`);
    if(!sel) continue;
    sel.innerHTML = "";
    for (let m = 0; m < 60; m++) {
      const o = document.createElement("option");
      o.value = o.text = String(m).padStart(2, "0");
      sel.appendChild(o);
    }
  }
}

function makeLetterSelect() {
  const s = document.createElement("select");
  s.className = 'code-part';
  ["P", "G", "E", "R", "H", "A", "S", "C", "M", "F"].forEach((v) => {
    const o = document.createElement("option");
    o.value = v;
    o.text = v;
    s.appendChild(o);
  });
  return s;
}
function makeNumInput() {
  const i = document.createElement("input");
  i.type = "text";
  i.className = "num code-part";
  i.maxLength = 3;
  i.placeholder = "001";
  i.addEventListener("input", () => {
    i.value = i.value.replace(/\D/g, "").slice(0, 3);
  });
  return i;
}
function makeNameInput(v) {
  const i = document.createElement("input");
  i.type = "text";
  i.className = "name";
  i.value = v || "";
  return i;
}

function unitRow(name, container, isShared = false, groupId) {
  const row = document.createElement("div");
  row.className = "unit-row" + (isShared ? " shared" : "");
  row.dataset.role = isShared ? "shared" : "base";
  row.dataset.group = String(groupId);

  const right = document.createElement("div");
  right.className = "right-part";
  const up = document.createElement("button"); up.textContent = "↑"; up.className = "btn ghost icon";
  const down = document.createElement("button"); down.textContent = "↓"; down.className = "btn ghost icon";
  right.append(up, down);

  const center = document.createElement("div");
  center.className = "center-part";
  const nameInp = makeNameInput(name);
  if (name) {
      nameInp.readOnly = true;
      nameInp.classList.add('readonly');
  }

  let commandNumInput = null;
  if (name === 'م قيادة') {
    commandNumInput = document.createElement("input");
    commandNumInput.type = "text";
    commandNumInput.className = 'command-num-input';
    commandNumInput.placeholder = "001";
    commandNumInput.addEventListener("input", () => {
        commandNumInput.value = commandNumInput.value.replace(/\D/g, "");
        updateVisualStates();
        saveState();
    });
  }

  const sep = document.createElement("span"); sep.textContent = " | ";
  const letter = makeLetterSelect();
  const hy = document.createElement("span"); hy.textContent = "-";
  const num = makeNumInput();
  hy.classList.add("code-part");

  letter.addEventListener("change", updateVisualStates);
  num.addEventListener("input", updateVisualStates);
  nameInp.addEventListener('input', saveState);
  letter.addEventListener('change', saveState);
  num.addEventListener('input', saveState);

  const logoutIndicator = document.createElement("span");
  logoutIndicator.className = "logout-indicator";
  logoutIndicator.textContent = "🔴";
  logoutIndicator.style.cssText = "display: none; margin-left: 8px;";

  const centerElements = [nameInp];
  if (commandNumInput) {
    centerElements.push(commandNumInput);
  }
  centerElements.push(sep, letter, hy, num, logoutIndicator);
  center.append(...centerElements);

  const left = document.createElement("div");
  left.className = "left-part";

  if (!isShared) {
    if (name === 'م قيادة') {
        const addAnotherMQiada = document.createElement("button");
        addAnotherMQiada.textContent = "اضافة م قيادة";
        addAnotherMQiada.className = "btn ghost";
        addAnotherMQiada.onclick = () => {
            const newRow = unitRow('م قيادة', container, false, seq++);
            row.after(newRow);
            updateVisualStates();
            saveState();
        };
        left.append(addAnotherMQiada);
    } else {
        const unitsWithoutSharedButton = ["ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"];
        const baseNameForSharedCheck = name.replace(/\s\d+$/, '').trim();

        if (!unitsWithoutSharedButton.includes(baseNameForSharedCheck)) {
            const addShared = document.createElement("button");
            const isAirSupport = name.startsWith('شاهين') || name.startsWith('صقر');

            addShared.textContent = isAirSupport ? "مساعد" : "مشتركة";
            addShared.className = "btn ghost";
            addShared.onclick = () => {
              const after = lastShared(String(groupId), container) || row;
              const sharedName = isAirSupport ? `مساعد ${nameInp.value.trim()}` : `م ${nameInp.value.trim()}`;
              after.after(unitRow(sharedName, container, true, parseInt(String(groupId), 10)));
              updateVisualStates();
              saveState();
            };
            left.append(addShared);
        }
    }

    const secondaryAddableUnits = configs[activeApp].secondaryAddableUnits;
    let baseName = null;
    for(const unit of secondaryAddableUnits) {
        if(name.startsWith(unit)) {
            baseName = unit;
            break;
        }
    }

    if (baseName) {
      const addSecondary = document.createElement("button");
      addSecondary.textContent = `+ ${baseName}`;
      addSecondary.className = "btn ghost";
      addSecondary.onclick = () => {
        const currentNameInput = row.querySelector('.name');

        if (currentNameInput.value.trim() === baseName) {
          currentNameInput.value = `${baseName} 1`;
        }

        const existingNums = new Set();
        container.querySelectorAll('.unit-row').forEach(r => {
            const name = (r.querySelector('.name'))?.value.trim();
            if (name && name.startsWith(baseName)) {
                const numMatch = name.match(/\d+$/);
                if (numMatch) {
                    const parsedNum = parseInt(numMatch[0], 10);
                    if (!isNaN(parsedNum)) {
                        existingNums.add(parsedNum);
                    }
                }
            }
        });

        let newNum = 1;
        while (existingNums.has(newNum)) {
          newNum++;
        }

        const newName = `${baseName} ${newNum}`;
        const newRow = unitRow(newName, container, false, seq++);

        insertUnitRowInOrder(container, newRow);

        updateVisualStates();
        saveState();
      };
      left.append(addSecondary);
    }
  }

  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "تسجيل خروج";
  logoutBtn.className = "btn ghost";
  logoutBtn.onclick = () => {
      const l = letter.value;
      const n = num.value.trim();
      if (!l || !n) return;
      const logoutList = document.getElementById(`${activeApp}-logoutList`);
      const alreadyLoggedOut = Array.from(logoutList.querySelectorAll(".unit-row")).some(r => (r.querySelector("select.code-part")).value === l && (r.querySelector(".num")).value.trim() === n);
      if (!alreadyLoggedOut) {
          const newRow = logoutRow();
          (newRow.querySelector("select.code-part")).value = l;
          (newRow.querySelector(".num")).value = n;
          logoutList.appendChild(newRow);
          updateVisualStates();
          saveState();
      }
  };
  left.append(logoutBtn);

  const nonDeletableUnits = [
    'مسؤول نقاط التحكم', 'مسؤول تحكم 1', 'تحكم 10', 'تحكم 20', 'تحكم 30',
    'تحكم 40', 'تحكم 50', 'تحكم 60', 'تحكم 70'
  ];

  const containerIdSuffix = container.id.split('-').pop();
  const specialStaticSections = ['s1List', 's2List', 'b1List', 'b2List', 'e1List'];
  const isSpecialStaticSection = specialStaticSections.includes(containerIdSuffix);
  const isMainListContainer = containerIdSuffix === 'mainList';
  const protectedMainUnits = configs[activeApp].mainUnits;

  let shouldShowDelete = true;
  if (nonDeletableUnits.includes(name)) {
      shouldShowDelete = false;
  } else if (isSpecialStaticSection && !isShared) {
      shouldShowDelete = false;
  } else if (isMainListContainer && protectedMainUnits.includes(name)) {
      if (name === 'م قيادة') {
          const existingMQiadaRows = Array.from(container.querySelectorAll('.unit-row .name')).filter(
              (input) => input.value.trim() === 'م قيادة'
          );
          if (existingMQiadaRows.length > 1) {
              shouldShowDelete = true;
          } else {
              shouldShowDelete = false;
          }
      } else {
          shouldShowDelete = false;
      }
  }

  if (shouldShowDelete) {
      const del = document.createElement("button");
      del.textContent = "❌";
      del.className = "btn ghost icon";
      del.onclick = () => {
        const currentName = (row.querySelector('.name')).value.trim();
        const nameMatch = currentName.match(/^(.*?) (\d+)$/);

        if (currentName === 'م قيادة') {
            row.remove();
        } else if ((row).dataset.role === 'base') {
            blockOf((row).dataset.group, container).forEach((item) => item.remove());
        } else {
            row.remove();
        }
        
        if (nameMatch) {
            const baseName = nameMatch[1];
            const specialUnitsForAutoRename = ["ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"];
            
            if (specialUnitsForAutoRename.includes(baseName)) {
                const familyRows = Array.from(container.querySelectorAll('.unit-row')).filter(r => {
                    const nameInput = r.querySelector('.name');
                    if (!nameInput) return false;
                    if ((r).dataset.role === 'shared') return false;
                    return nameInput.value.trim().startsWith(baseName);
                });

                if (familyRows.length === 1) {
                    const lastUnitNameInput = familyRows[0].querySelector('.name');
                    const lastUnitName = lastUnitNameInput.value.trim();
                    if (lastUnitName === `${baseName} 1`) {
                        lastUnitNameInput.value = baseName;
                    }
                }
            }
        }

        updateVisualStates();
        saveState();
      };
      left.append(del);
  }

  up.onclick = () => {
    if (row.previousElementSibling) row.parentNode.insertBefore(row, row.previousElementSibling);
    updateVisualStates();
    saveState();
  };
  down.onclick = () => {
    if (row.nextElementSibling) row.parentNode.insertBefore(row.nextElementSibling, row);
    updateVisualStates();
    saveState();
  };

  row.append(right, center, left);

  if (name.startsWith('_H_')) {
      nameInp.value = name.substring(3);
      nameInp.readOnly = true;
      row.classList.add('unit-header-row');
      right.style.display = 'none';
      sep.style.display = 'none';
      letter.style.display = 'none';
      hy.style.display = 'none';
      num.style.display = 'none';
      left.style.display = 'none';
      if(commandNumInput) commandNumInput.style.display = 'none';
  }

  return row;
}

function addBase(c, name = "") {
  c.appendChild(unitRow(name, c, false, seq++));
}

function lastShared(id, c) {
  return Array.from(c.querySelectorAll(".unit-row")).filter((r) => r.dataset.group === id && r.dataset.role === "shared").pop();
}

function blockOf(id, c) {
  const rows = Array.from(c.querySelectorAll(".unit-row"));
  const block = [];
  let on = false;
  for (const r of rows) {
    if ((r).dataset.group === id) {
      on = true;
      block.push(r);
    } else if (on) {
      break;
    }
  }
  return block;
}

function logoutRow() {
  const row = document.createElement("div");
  row.className = "unit-row";
  const letter = makeLetterSelect();
  const hy = document.createElement("span"); hy.textContent = "-";
  const num = makeNumInput();
  const del = document.createElement("button");
  del.textContent = "❌";
  del.className = "btn ghost icon";
  del.onclick = () => {
    row.remove();
    updateVisualStates();
    saveState();
  };
  letter.addEventListener("change", updateVisualStates);
  num.addEventListener("input", updateVisualStates);
  letter.addEventListener('change', saveState);
  num.addEventListener('input', saveState);
  row.append(letter, hy, num, del);
  return row;
}

function clearAllLists() {
  const prefix = activeApp;
  document.getElementById(`${prefix}-mainList`).innerHTML = '';
  document.getElementById(`${prefix}-dynamicSectionsContainer`).innerHTML = '';
  document.getElementById(`${prefix}-addSectionSelect`).querySelectorAll('option').forEach(opt => opt.disabled = false);
  document.getElementById(`${prefix}-s1List`).innerHTML = '';
  document.getElementById(`${prefix}-s2List`).innerHTML = '';
  const b1List = document.getElementById(`${prefix}-b1List`);
  if (b1List) b1List.innerHTML = '';
  const e1List = document.getElementById(`${prefix}-e1List`);
  if (e1List) e1List.innerHTML = '';
  document.getElementById(`${prefix}-logoutList`).innerHTML = '';
  seq = 1;
}

function showParseMessage(msg, type = 'success') {
    const el = document.getElementById(`${activeApp}-parseMsg`);
    if(!el) return;
    el.textContent = msg;
    let color = '#60a5fa';
    if (type === 'error') {
        color = '#f87171';
    } else if (type === 'info') {
        color = '#fb923c';
    }
    el.style.color = color;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 3000);
}

function normalizeName(name) {
  if (!name) return '';
  let normalized = name.trim().replace(/:$/, '').trim();
  if (normalized.match(/^(م\s*)?(قياده|قيادة)$/)) normalized = 'م قيادة';
  
  if (normalized.startsWith('مشاهين')) {
      normalized = normalized.replace(/^مشاهين/, 'مساعد شاهين');
  } else if (normalized.startsWith('م شاهين')) {
      normalized = normalized.replace(/^م شاهين/, 'مساعد شاهين');
  }
  
  if (normalized.startsWith('مصقر')) {
      normalized = normalized.replace(/^مصقر/, 'مساعد صقر');
  } else if (normalized.startsWith('م صقر')) {
      normalized = normalized.replace(/^م صقر/, 'مساعد صقر');
  }

  if (normalized.startsWith('حنوب')) normalized = normalized.replace(/^حنوب/, 'جنوب');
  if (normalized.includes('ضابط خفر') || normalized.includes('ضابط حفر')) {
      const numMatch = normalized.match(/\d+$/);
      normalized = numMatch ? `ضابط خفر ${numMatch[0]}` : 'ضابط خفر';
  }
  if (normalized.startsWith('حفر')) normalized = normalized.replace(/^حفر/, 'خفر');
  if (['شرطه عسكريه', 'شرطه العسكرية', 'شرطة عسكرية'].includes(normalized)) normalized = 'الشرطة العسكرية';
  if (normalized.startsWith('مساعد')) normalized = normalized.replace(/^مساعد/, 'مساعد ');
  const shoonVariations = ['الشوؤن الاداريه', 'الشؤون الاداريه', 'شؤون ادارية', 'شؤون الاداريه', 'الشؤون ادارية'];
  if (shoonVariations.includes(normalized)) normalized = 'الشؤون الادارية';
  
  const staticPrefixes = ['سين', 'جيم', 'لام', 'باء', 'عين'];
  for(const p of staticPrefixes) {
      if(normalized === p) return `${p} 10`;
  }

  const singleUnitNames = ['درع', 'سيف', 'سهم', 'جنوب', 'غرب', 'خفر', 'ضابط خفر', 'حزم', 'رمح', 'ردع', 'امن', 'ساحل', 'دورية الشمال', 'دورية الجنوب', 'دورية الشرق', 'دورية الغرب', 'نقطة تفتيش', 'مرور سري', 'امن طرق', 'تحقيق', 'مهمات', 'اسناد', 'رصد', 'ساهر', 'امان', 'عزم'];
  if (singleUnitNames.includes(normalized)) normalized = `${normalized} 1`;
  return normalized.replace(/\s\s+/g, ' ');
}

function processLogoutSection(sectionText, container) {
  if (!sectionText || !container) return;
  const lines = sectionText.split('\n');
  const codeRegex = /([A-Z])\s*-?\s*(\d{1,3})/i;
  lines.forEach(line => {
      const match = line.match(codeRegex);
      if (match) {
          const row = logoutRow();
          container.appendChild(row);
          (row.querySelector('select.code-part')).value = match[1].toUpperCase();
          (row.querySelector('.num')).value = match[2];
      }
  });
}

function buildUnitAndPrefixMaps(prefix) {
    const unitMap = new Map();
    const prefixMap = new Map();
    const config = configs[prefix];

    config.mainUnits.forEach(unitName => {
        unitMap.set(normalizeName(unitName), `${prefix}-mainList`);
    });
    config.secondaryAddableUnits.forEach(unitPrefix => {
        if (!prefixMap.has(unitPrefix)) {
            prefixMap.set(unitPrefix, `${prefix}-mainList`);
        }
    });

    config.dynamicSections.forEach(section => {
        const containerId = `${prefix}-${section.id}List`;
        section.defaultUnits.forEach(unit => {
            const normalized = normalizeName(unit.name);
            if (!normalized.startsWith('_H_')) {
                unitMap.set(normalized, containerId);
                const baseNameRegex = /^(.*?)\s*\d*$/;
                const match = normalized.match(baseNameRegex);
                if (match && match[1]) {
                    const baseName = match[1].trim();
                    if (baseName) {
                        prefixMap.set(baseName, containerId);
                    }
                }
            }
        });
    });

    const staticSections = [];
    if (prefix === 'ps') {
        staticSections.push({ id: 's1List', prefix: 'سين ', range: [10, 19] });
        staticSections.push({ id: 's2List', prefix: 'سين ', range: [20, 29] });
        staticSections.push({ id: 'b1List', prefix: 'باء ', range: [10, 19] });
    } else { // hp
        staticSections.push({ id: 's1List', prefix: 'جيم ', range: [10, 19] });
        staticSections.push({ id: 's2List', prefix: 'لام ', range: [10, 19] });
        staticSections.push({ id: 'e1List', prefix: 'عين ', range: [10, 19] });
    }
    const prefixCounts = {};
    staticSections.forEach(s => {
        const p = s.prefix.trim();
        prefixCounts[p] = (prefixCounts[p] || 0) + 1;
    });

    staticSections.forEach(section => {
        for (let i = section.range[0]; i <= section.range[1]; i++) {
            unitMap.set(normalizeName(`${section.prefix}${i}`), `${prefix}-${section.id}`);
        }
        const p = section.prefix.trim();
        if (prefixCounts[p] === 1) {
            prefixMap.set(p, `${prefix}-${section.id}`);
        }
    });

    return { unitMap, prefixMap };
}

function parseAndFillReportLegacy() {
  const prefix = activeApp;
  const text = (document.getElementById(`${prefix}-pasteArea`)).value;
  if (!text.trim()) {
      showParseMessage('الرجاء لصق تقرير أولاً.', 'error');
      return;
  }

  clearAllLists();
  populateDefaultUnits(true);

  const timeRegex = /الساعة\s*(\d{1,2}):(\d{2})\s*([صم])\s*(?:الى|إلى)\s*الساعة\s*(\d{1,2}):(\d{2})\s*([صم])/i;
  const timeMatch = text.match(timeRegex);
  if (timeMatch) {
      (document.getElementById(`${prefix}-startHour`)).value = String(parseInt(timeMatch[1], 10)).padStart(2, '0');
      (document.getElementById(`${prefix}-startMin`)).value = timeMatch[2];
      (document.getElementById(`${prefix}-startPeriod`)).value = timeMatch[3].toLowerCase();
      (document.getElementById(`${prefix}-endHour`)).value = String(parseInt(timeMatch[4], 10)).padStart(2, '0');
      (document.getElementById(`${prefix}-endMin`)).value = timeMatch[5];
      (document.getElementById(`${prefix}-endPeriod`)).value = timeMatch[6].toLowerCase();
  }

  const { unitMap, prefixMap } = buildUnitAndPrefixMaps(prefix);

  let reportText = text;

  const logoutRegex = /ت?سجيل\s*خروج[^:]*:/i;
  const logoutMatch = reportText.match(logoutRegex);
  if (logoutMatch) {
      const logoutContent = reportText.substring(logoutMatch.index + logoutMatch[0].length);
      processLogoutSection(logoutContent, document.getElementById(`${prefix}-logoutList`));
      reportText = reportText.substring(0, logoutMatch.index);
  }

  const parseLine = (line) => {
      const lineRegex = /^(.*?)\s*(?:(?:([A-Z])\s*-?\s*(\d{1,3}))|(?:(\d{1,3})\s*-?\s*([A-Z])))\s*[|I:]*$/i;
      const match = line.trim().match(lineRegex);
      if (!match) return null;

      let rawName = match[1].replace(/[|I:]/g, ' ').trim();
      let commandNum = null;

      const mqiadaMatch = rawName.match(/^(م\s*(?:قياده|قيادة))\s*(\d+)$/i);
      if (mqiadaMatch) {
          rawName = mqiadaMatch[1];
          commandNum = mqiadaMatch[2];
      }
      
      const name = normalizeName(rawName);
      
      let letter, num;
      if (match[2] && match[3]) { letter = match[2].toUpperCase(); num = match[3]; }
      else if (match[4] && match[5]) { letter = match[5].toUpperCase(); num = match[4]; }
      else return null;
      if (parseInt(num, 10) === 0) return null;
      if (name) {
          num = String(num).padStart(3, '0');
          const result = { name, letter, num };
          if (commandNum) {
              result.commandNum = commandNum;
          }
          return result;
      }
      return null;
  };

  const allUnits = reportText.split('\n')
      .filter(line => !line.includes('الــعمــلـيـات') && !line.includes('نــائـــب الــعمــلـيـات'))
      .map(parseLine)
      .filter(Boolean);

  const baseUnits = [];
  const sharedUnits = [];
  allUnits.forEach(unit => {
      const isSharedUnit = (unit.name.startsWith('م ') && unit.name !== 'م قيادة') || unit.name.startsWith('مساعد ');
      if (isSharedUnit) {
          sharedUnits.push(unit);
      } else {
          baseUnits.push(unit);
      }
  });

  baseUnits.forEach(unit => {
      if (!unit) return;
      const normalizedName = normalizeName(unit.name);
      let containerId = unitMap.get(normalizedName);

      if (!containerId) {
          const sortedPrefixes = Array.from(prefixMap.keys()).sort((a, b) => b.length - a.length);
          const bestMatch = sortedPrefixes.find(p => normalizedName.startsWith(p));
          if (bestMatch) {
              containerId = prefixMap.get(bestMatch);
          }
      }

      if (!containerId) {
          containerId = `${prefix}-mainList`;
      }

      const dynamicConfig = configs[prefix].dynamicSections.find(s => `${prefix}-${s.id}List` === containerId);
      if (dynamicConfig && !document.getElementById(`${prefix}-${dynamicConfig.id}Section`)) {
          createDynamicSection(dynamicConfig.id, dynamicConfig.title, dynamicConfig.defaultUnits, null, false);
      }

      const container = document.getElementById(containerId);
      if (container) {
          let targetRow = null;
          if (normalizedName !== 'م قيادة') {
            targetRow = Array.from(container.querySelectorAll('.unit-row')).find(row => {
                const nameInput = row.querySelector('.name');
                return nameInput && normalizeName(nameInput.value) === normalizedName;
            });
          }

          if (targetRow) {
              (targetRow.querySelector('select.code-part')).value = unit.letter;
              (targetRow.querySelector('input.num')).value = unit.num;
              const commandInput = targetRow.querySelector('.command-num-input');
              if (commandInput && (unit).commandNum) {
                  commandInput.value = (unit).commandNum;
              }
          } else {
              const newRow = unitRow(unit.name, container, false, seq++);
              (newRow.querySelector('select.code-part')).value = unit.letter;
              (newRow.querySelector('input.num')).value = unit.num;
              const commandInput = newRow.querySelector('.command-num-input');
              if (commandInput && (unit).commandNum) {
                  commandInput.value = (unit).commandNum;
              }
              insertUnitRowInOrder(container, newRow);
          }
      }
  });

  sharedUnits.forEach(unit => {
      let parentName;
      if (unit.name.startsWith('مساعد ')) {
          parentName = normalizeName(unit.name.substring(6).trim());
      } else {
          parentName = normalizeName(unit.name.substring(2).trim());
      }

      const isAirSupportShared = parentName.startsWith('شاهين') || parentName.startsWith('صقر');
      if (isAirSupportShared) {
          const airSupportSectionId = 'air';
          const airSupportSectionElementId = `${prefix}-${airSupportSectionId}Section`;
          if (!document.getElementById(airSupportSectionElementId)) {
              const airSupportConfig = configs[prefix].dynamicSections.find(s => s.id === airSupportSectionId);
              if (airSupportConfig) {
                  createDynamicSection(airSupportConfig.id, airSupportConfig.title, airSupportConfig.defaultUnits, null, false);
              }
          }
      }
      
      let parentRow = null;
      const allListSelectors = `#${prefix}-mainList, #${prefix}-dynamicSectionsContainer .units, #${prefix}-s1List, #${prefix}-s2List, #${prefix}-b1List, #${prefix}-e1List`;
      const allLists = document.querySelectorAll(allListSelectors);

      for (const list of Array.from(allLists)) {
          parentRow = Array.from(list.querySelectorAll('.unit-row[data-role="base"]')).find(row => {
              const nameInput = row.querySelector('.name');
              return nameInput && normalizeName(nameInput.value) === parentName;
          });
          if (parentRow) break;
      }

      if (parentRow) {
          const parentContainer = parentRow.closest('.units');
          const parentGroupId = (parentRow).dataset.group;
          const lastSharedRow = lastShared(parentGroupId, parentContainer) || parentRow;
          const newSharedRow = unitRow(unit.name, parentContainer, true, parseInt(parentGroupId, 10));
          (newSharedRow.querySelector('select.code-part')).value = unit.letter;
          (newSharedRow.querySelector('input.num')).value = unit.num;
          lastSharedRow.after(newSharedRow);
      } else {
           const container = document.getElementById(`${prefix}-mainList`);
           if(container){
              const newRow = unitRow(unit.name, container, false, seq++);
              (newRow.querySelector('select.code-part')).value = unit.letter;
              (newRow.querySelector('input.num')).value = unit.num;
              insertUnitRowInOrder(container, newRow);
           }
      }
  });

  const mainList = document.getElementById(`${prefix}-mainList`);
  if (mainList) {
      const mQiadaRows = Array.from(mainList.querySelectorAll('.unit-row')).filter(row => {
          const nameInput = row.querySelector('.name');
          return nameInput && nameInput.value.trim().startsWith('م قيادة');
      });
      if (mQiadaRows.length > 1) {
          const defaultMQiadaRow = mQiadaRows.find(row => {
              const nameInput = row.querySelector('.name');
              const numInput = row.querySelector('.num');
              return nameInput && nameInput.value.trim() === 'م قيادة' && numInput && !numInput.value.trim();
          });
          if (defaultMQiadaRow) defaultMQiadaRow.remove();
      }
  }

  updateVisualStates();
  saveState();
  showParseMessage('✅ تم تحديث النموذج بنجاح.');
}

function updateAddMissingButtons() {
  const appPrefix = activeApp;
  const staticSections = [];
  if (appPrefix === 'ps') {
      staticSections.push(
          { id: 's1List', prefix: 'سين ', range: [10, 19], isRange: true },
          { id: 's2List', prefix: 'سين ', range: [20, 29], isRange: true },
          { id: 'b1List', prefix: 'باء ', range: [10, 19], isRange: true }
      );
  } else if (appPrefix === 'hp') {
       staticSections.push(
          { id: 's1List', prefix: 'جيم ', range: [10, 19], isRange: true },
          { id: 's2List', prefix: 'لام ', range: [10, 19], isRange: true },
          { id: 'e1List', prefix: 'عين ', range: [10, 19], isRange: true }
      );
  }

  staticSections.forEach(section => {
      const container = document.getElementById(`${appPrefix}-${section.id}`);
      if (!container) return;
      const actionsDiv = container.nextElementSibling;
      if (!actionsDiv?.classList.contains('actions')) return;

      actionsDiv.querySelectorAll('.add-missing-btn').forEach(btn => btn.remove());

      const existingNums = new Set();
      container.querySelectorAll('.unit-row').forEach(row => {
          const name = (row.querySelector('.name'))?.value.trim();
          if (name?.startsWith(section.prefix)) {
              const numPart = name.replace(section.prefix, '').trim();
              const num = parseInt(numPart, 10);
              if (!isNaN(num)) existingNums.add(num);
          }
      });

      const numbersToProcess = Array.from({length: section.range[1] - section.range[0] + 1}, (_, i) => section.range[0] + i);

      numbersToProcess.reverse().forEach(i => {
          if (!existingNums.has(i)) {
              const newName = `${section.prefix}${i}`;
              const addBtn = document.createElement('button');
              addBtn.textContent = `+ ${newName}`;
              addBtn.className = 'btn ghost add-missing-btn';
              addBtn.style.marginLeft = '8px';
              addBtn.onclick = () => {
                  const newRow = unitRow(newName, container, false, seq++);
                  insertUnitRowInOrder(container, newRow);
                  updateVisualStates();
                  saveState();
              };
              actionsDiv.prepend(addBtn);
          }
      });
  });
}

function updateConfigurableSectionButtons(sectionId, defaultUnitNames) {
    const list = document.getElementById(`${activeApp}-${sectionId}List`);
    if (!list) return;
    const actionsDiv = list.nextElementSibling;
    if (!actionsDiv?.classList.contains('actions')) return;

    actionsDiv.querySelectorAll('.add-missing-btn').forEach(btn => btn.remove());

    const existingUnits = new Set(Array.from(list.querySelectorAll('.name')).map((input) => input.value.trim()));
    const missingUnits = defaultUnitNames.filter(unit => !existingUnits.has(unit) && !unit.startsWith('_H_'));

    missingUnits.reverse().forEach(unitName => {
        const addBtn = document.createElement('button');
        addBtn.textContent = `+ ${unitName}`;
        addBtn.className = 'btn ghost add-missing-btn';
        addBtn.style.marginLeft = '8px';
        addBtn.onclick = () => {
            const newRow = unitRow(unitName, list, false, seq++);
            insertUnitRowInOrder(list, newRow, defaultUnitNames);
            updateVisualStates();
            saveState();
        };
        actionsDiv.prepend(addBtn);
    });
}

function updateExpandableSectionButtons() {
  const appPrefix = activeApp;
  const config = configs[appPrefix];

  document.querySelectorAll('.inline-actions-bar').forEach(el => el.remove());

  const roadServicesConfig = config.dynamicSections.find(s => s.id === 'road_services');
  if (!roadServicesConfig || !roadServicesConfig.expandableGroups) return;

  const container = document.getElementById(`${appPrefix}-${roadServicesConfig.id}List`);
  if (!container) return;

  const mainActionsDiv = container.nextElementSibling;
  const allUnitRowsInContainer = Array.from(container.querySelectorAll('.unit-row'));

  let anyGroupManaged = false;

  roadServicesConfig.expandableGroups.forEach((group, groupIndex) => {
      const baseNumber = group.range[0] - 1;
      const allPossibleNumbersInGroup = [baseNumber, ...Array.from({length: group.range[1] - group.range[0] + 1}, (_, i) => group.range[0] + i)];

      const existingRowsForGroup = allUnitRowsInContainer.filter(row => {
          const name = (row.querySelector('.name'))?.value.trim();
          if (!name || !name.startsWith(group.prefix)) return false;
          const num = parseInt(name.replace(group.prefix, ''), 10);
          return !isNaN(num) && allPossibleNumbersInGroup.includes(num);
      });

      const existingNumbersForGroup = new Set(existingRowsForGroup.map(row => parseInt((row.querySelector('.name')).value.trim().replace(group.prefix, ''), 10)));
      const missingNumbers = allPossibleNumbersInGroup.filter(num => !existingNumbersForGroup.has(num)).sort((a, b) => a - b);

      let insertionPoint = null;
      if (existingRowsForGroup.length > 0) {
          insertionPoint = existingRowsForGroup.sort((a, b) => {
              const numA = parseInt((a.querySelector('.name')).value.replace(group.prefix, ''));
              const numB = parseInt((b.querySelector('.name')).value.replace(group.prefix, ''));
              return numA - numB;
          }).pop();

          let cursor = insertionPoint.nextElementSibling;
          while (cursor) {
              if (!cursor.classList.contains('unit-row') || cursor.classList.contains('unit-header-row')) break;
              const cursorName = (cursor.querySelector('.name'))?.value.trim();
              if (cursorName) {
                  const isAnotherGroupUnit = roadServicesConfig.expandableGroups.some(g => {
                      if (!cursorName.startsWith(g.prefix)) return false;
                      const numPart = cursorName.replace(g.prefix, '').trim();
                      return numPart && !isNaN(parseInt(numPart, 10));
                  });
                  if (isAnotherGroupUnit) break;
              }
              insertionPoint = cursor;
              cursor = insertionPoint.nextElementSibling;
          }
      } else {
          const headerDef = roadServicesConfig.defaultUnits.filter(u => u.name.startsWith('_H_'))[groupIndex];
          if (headerDef) {
              const headerText = headerDef.name.substring(3);
              insertionPoint = allUnitRowsInContainer.find(row => row.classList.contains('unit-header-row') && (row.querySelector('.name'))?.value.trim() === headerText);
          }
      }

      if (!insertionPoint) return;
      anyGroupManaged = true;

      const actionsBar = document.createElement('div');
      actionsBar.className = 'actions inline-actions-bar';
      actionsBar.style.paddingRight = '50px';
      actionsBar.style.justifyContent = 'flex-start';

      missingNumbers.forEach(num => {
          const unitNameToAdd = `${group.prefix}${num}`;
          const addUnitBtn = document.createElement('button');
          addUnitBtn.className = 'btn ghost';
          addUnitBtn.textContent = `+ ${unitNameToAdd}`;
          addUnitBtn.onclick = () => {
              const newRow = unitRow(unitNameToAdd, container, false, seq++);
              insertUnitRowInOrder(container, newRow);
              updateVisualStates();
              saveState();
          };
          actionsBar.appendChild(addUnitBtn);
      });

      const addDirectiveBtn = document.createElement('button');
      addDirectiveBtn.className = 'btn ghost';
      addDirectiveBtn.textContent = '+ إضافة توجيه';
      addDirectiveBtn.onclick = () => {
          const newRow = unitRow('', container, false, seq++);
          actionsBar.before(newRow);
          updateVisualStates();
          saveState();
      };
      actionsBar.appendChild(addDirectiveBtn);

      if (actionsBar.hasChildNodes()) {
          (insertionPoint).after(actionsBar);
      }
  });

  if (anyGroupManaged && mainActionsDiv && mainActionsDiv.classList.contains('actions')) {
      mainActionsDiv.style.display = 'none';
  } else if (mainActionsDiv && mainActionsDiv.classList.contains('actions')) {
      mainActionsDiv.style.display = 'flex';
  }
}

function insertUnitRowInOrder(container, newRow, predefinedOrder = []) {
    const unitName = (newRow.querySelector('.name')).value.trim();

    if (unitName === 'م قيادة') {
        const mqiadaRows = Array.from(container.querySelectorAll('.unit-row')).filter(row => {
            const nameInput = row.querySelector('.name');
            return nameInput && nameInput.value.trim() === 'م قيادة';
        });
        if (mqiadaRows.length > 0) {
            const lastMQiadaRow = mqiadaRows[mqiadaRows.length - 1];
            lastMQiadaRow.after(newRow);
            return;
        }
    }

    const getUnitInfo = (name) => {
        const match = name.match(/^(.*?)\s*(\d+)$/);
        if (match) return { baseName: match[1].trim(), number: parseInt(match[2], 10) };
        return null;
    };

    const newUnitInfo = getUnitInfo(unitName);
    if (newUnitInfo) {
        const family = [];
        container.querySelectorAll('.unit-row[data-role="base"]:not(.unit-header-row)').forEach(row => {
            const existingUnitName = (row.querySelector('.name'))?.value.trim();
            const existingUnitInfo = getUnitInfo(existingUnitName);
            if (existingUnitInfo && existingUnitInfo.baseName === newUnitInfo.baseName) {
                family.push({ element: row, number: existingUnitInfo.number });
            }
        });

        if (family.length > 0) {
            family.sort((a, b) => a.number - b.number);
            const successor = family.find(member => member.number > newUnitInfo.number);
            if (successor) {
                let insertionPoint = successor.element;
                let currentElement = successor.element;
                while (currentElement.previousElementSibling) {
                    const previous = currentElement.previousElementSibling;
                    if (!previous.classList.contains('unit-header-row')) break;
                    insertionPoint = previous;
                    currentElement = previous;
                }
                container.insertBefore(newRow, insertionPoint);
                return;
            } else {
                const lastFamilyMember = family[family.length - 1].element;
                const lastMemberGroupId = lastFamilyMember.dataset.group;
                const lastMemberBlock = blockOf(lastMemberGroupId, container);
                const insertionPoint = lastMemberBlock.length > 0 ? lastMemberBlock[lastMemberBlock.length - 1] : lastFamilyMember;
                insertionPoint.after(newRow);
                return;
            }
        }
    }

    if (predefinedOrder && predefinedOrder.length > 0) {
        const unitIndex = predefinedOrder.indexOf(unitName);
        if (unitIndex > -1) {
            let successorElement = null;
            for (let i = unitIndex + 1; i < predefinedOrder.length; i++) {
                const successorName = predefinedOrder[i];
                const found = Array.from(container.children).find(child =>
                    child.classList.contains('unit-row') && (child.querySelector('.name'))?.value.trim() === successorName
                );
                if (found) {
                    successorElement = found;
                    break;
                }
            }
            if (successorElement) {
                container.insertBefore(newRow, successorElement);
                return;
            }
        }
    }
    container.appendChild(newRow);
}

function updateMainListAddButtons() {
    const prefix = activeApp;
    const config = configs[prefix];
    const mainList = document.getElementById(`${prefix}-mainList`);
    const actionsContainer = document.getElementById(`${prefix}-mainList-actions`);
    if (!mainList || !actionsContainer) return;
    actionsContainer.innerHTML = '';
    const existingUnitNames = new Set(Array.from(mainList.querySelectorAll('.unit-row .name')).map((input) => input.value.trim()));
    const missingDefaultUnits = config.mainUnits.filter(unitName => {
        if (existingUnitNames.has(unitName)) return false;
        const isExpandableBase = config.secondaryAddableUnits.includes(unitName);
        if (isExpandableBase) {
            const existsWithNumber = Array.from(existingUnitNames).some(existingName => existingName.startsWith(unitName + ' '));
            if (existsWithNumber) return false;
        }
        return true;
    });
    missingDefaultUnits.forEach(missingUnitName => {
        const btn = document.createElement('button');
        btn.className = 'btn ghost';
        btn.textContent = `+ إضافة ${missingUnitName}`;
        btn.onclick = () => {
            const newRow = unitRow(missingUnitName, mainList, false, seq++);
            insertUnitRowInOrder(mainList, newRow, config.mainUnits);
            updateVisualStates();
            saveState();
        };
        actionsContainer.appendChild(btn);
    });
}

function updateVisualStates() {
  const prefix = activeApp;
  const logoutCodes = new Set();
  const logoutList = document.getElementById(`${prefix}-logoutList`);
  if(logoutList) {
    logoutList.querySelectorAll(".unit-row").forEach(r => {
        let n = (r.querySelector(".num")).value.replace(/\D/g, "").slice(0, 3);
        if (n) logoutCodes.add(`${(r.querySelector("select.code-part")).value}-${n.padStart(3, "0")}`);
    });
  }

  const codeCounts = {};
  const dynamicSectionsConfig = configs[prefix].dynamicSections;
  let baseListIds = ['mainList', 's1List', 's2List'];
  if (prefix === 'ps') baseListIds.push('b1List');
  else if (prefix === 'hp') baseListIds.push('e1List');

  const listIds = [...baseListIds, ...dynamicSectionsConfig.map(c => `${c.id}List`)];
  const selector = listIds.map(id => `#${prefix}-${id} .unit-row`).join(', ');
  const allRows = document.querySelectorAll(selector);

  allRows.forEach(row => {
      let num = (row.querySelector(".num"))?.value.replace(/\D/g, "").slice(0, 3);
      if (num) {
          const code = `${(row.querySelector("select.code-part")).value}-${num.padStart(3, "0")}`;
          codeCounts[code] = (codeCounts[code] || 0) + 1;
      }
  });

  const mqiadaNumCounts = {};
  allRows.forEach(row => {
      const nameInput = row.querySelector('.name');
      if (nameInput && nameInput.value.trim() === 'م قيادة') {
          const commandNumInput = row.querySelector('.command-num-input');
          if (commandNumInput && commandNumInput.value.trim()) {
              const num = commandNumInput.value.trim();
              mqiadaNumCounts[num] = (mqiadaNumCounts[num] || 0) + 1;
          }
      }
  });

  allRows.forEach(row => {
      const letterEl = row.querySelector("select.code-part");
      const numEl = row.querySelector("input.num");
      if (!letterEl || !numEl) return;
      let num = numEl.value.replace(/\D/g, "").slice(0, 3);
      let code = num ? `${letterEl.value}-${num.padStart(3, '0')}` : "";
      const isLoggedOut = code && logoutCodes.has(code);
      const isDuplicate = code && codeCounts[code] > 1;
      const codeParts = row.querySelectorAll('.code-part');
      codeParts.forEach((p) => { p.style.color = ""; p.style.textDecoration = ""; });
      (row.querySelector('.logout-indicator')).style.display = 'none';

      if (isLoggedOut) {
          (row.querySelector('.logout-indicator')).style.display = 'inline';
          codeParts.forEach((p) => { p.style.color = "#f87171"; p.style.textDecoration = "line-through"; });
      } else if (isDuplicate) {
           codeParts.forEach((p) => { p.style.color = "#fb923c"; });
      } else if (code) {
           codeParts.forEach((p) => { p.style.color = "#22c55e"; });
      }
      
      const nameInput = row.querySelector('.name');
      if (nameInput && nameInput.value.trim() === 'م قيادة') {
          const commandNumInput = row.querySelector('.command-num-input');
          if (commandNumInput) {
              commandNumInput.style.color = "";
              commandNumInput.style.textDecoration = "";
              const commandNumValue = commandNumInput.value.trim();
              if (commandNumValue) {
                  if (isLoggedOut) {
                      commandNumInput.style.color = "#f87171";
                      commandNumInput.style.textDecoration = "line-through";
                  } else if (mqiadaNumCounts[commandNumValue] > 1) {
                      commandNumInput.style.color = "#fb923c";
                  } else {
                      commandNumInput.style.color = "#22c55e";
                  }
              }
          }
      }
  });

  updateAddMissingButtons();
  updateExpandableSectionButtons();
  dynamicSectionsConfig.forEach(config => {
      if (document.getElementById(`${prefix}-${config.id}List`) && !config.expandableGroups) {
          updateConfigurableSectionButtons(config.id, config.defaultUnits.map(u => u.name));
      }
  });
  updateMainListAddButtons();
}

function formatReport() {
  const prefix = activeApp;
  const config = configs[prefix];
  const reportType = (document.getElementById(`${prefix}-reportType`)).value;
  const start = `${(document.getElementById(`${prefix}-startHour`)).value}:${(document.getElementById(`${prefix}-startMin`)).value} ${(document.getElementById(`${prefix}-startPeriod`)).value}`;
  const end = `${(document.getElementById(`${prefix}-endHour`)).value}:${(document.getElementById(`${prefix}-endMin`)).value} ${(document.getElementById(`${prefix}-endPeriod`)).value}`;
  const logoutCodes = new Set();
  document.getElementById(`${prefix}-logoutList`).querySelectorAll(".unit-row").forEach(r => {
      const n = (r.querySelector(".num")).value.trim();
      if (n) logoutCodes.add(`${(r.querySelector("select.code-part")).value}-${n.padStart(3, '0')}`);
  });

  const getListContent = (listEl) => {
      if (!listEl) return "";
      const processedItems = Array.from(listEl.children)
          .map(unit => {
              if (unit.classList.contains('actions') || unit.classList.contains('inline-actions-bar') || unit.classList.contains('unit-header-row')) return null;
              const nameInp = unit.querySelector(".name");
              if (!nameInp) return null;
              const name = nameInp.value.trim();
              const numVal = (unit.querySelector(".num"))?.value.trim() || '';
              if (name && numVal) {
                  const code = `${(unit.querySelector("select.code-part")).value}-${numVal.padStart(3, '0')}`;
                  if (logoutCodes.has(code)) return null;
                  let displayName = name;
                  if (name === 'م قيادة') {
                      const commandNumInput = unit.querySelector(".command-num-input");
                      if (commandNumInput && commandNumInput.value.trim()) displayName = `${name} ${commandNumInput.value.trim()}`;
                  }
                  return { content: `${displayName} | ${code}`, isShared: unit.classList.contains('shared') };
              }
              return null;
          })
          .filter(Boolean);
      if (processedItems.length === 0) return "";
      return processedItems.map((item, index) => {
        if (index === 0) return item.content;
        if (item.isShared) return '\n' + item.content;
        return '\n\n' + item.content;
      }).join('');
  };

  let report = `${config.reportHeader} ${start} الى ${end}\n\n`;
  if (reportType === 'تقرير') report += `تقرير\n\n\n`;
  else report += `تـحـديـث ${reportType.split(' ')[1] || '1'}\n\n\n`;
  report += `الــعمــلـيـات | @منشن العمليات\n\nنــائـــب الــعمــلـيـات | @ منشن النائب العمليات`;
  const separator = '—————————————————';
  const reportParts = [];
  const mainListContent = getListContent(document.getElementById(`${prefix}-mainList`));
  if (mainListContent) reportParts.push(mainListContent);

  const activeDynamicSections = config.dynamicSections.filter(c => document.getElementById(`${prefix}-${c.id}Section`));
  const dynamicSectionsOutput = activeDynamicSections.map(c => {
      const listEl = document.getElementById(`${prefix}-${c.id}List`);
      if (!listEl) return null;
      const content = getListContent(listEl);
      const cleanTitle = c.reportTitle.replace(/\*/g, '').trim();
      return content ? `${cleanTitle}\n\n${content}` : null;
  }).filter(Boolean);

  if (dynamicSectionsOutput.length > 0) reportParts.push(`الدورات المفعلة :\n\n${dynamicSectionsOutput.join('\n\n')}`);
  else reportParts.push(`الدورات المفعلة :\n\nلا يوجد`);

  let staticSections = [];
  if (prefix === 'ps') {
    staticSections = [{ title: "ســـين 1 :", listId: "s1List" }, { title: "ســـين 2 :", listId: "s2List" }, { title: "باء 1 :", listId: "b1List" }];
  } else {
    staticSections = [{ title: "جـــيم :", listId: "s1List" }, { title: "لام :", listId: "s2List" }, { title: "عين :", listId: "e1List" }];
  }

  staticSections.forEach(sec => {
      const content = getListContent(document.getElementById(`${prefix}-${sec.listId}`));
      reportParts.push(`${sec.title}\n\n${content || 'لا يوجد'}`);
  });

  let logoutContent = Array.from(document.getElementById(`${prefix}-logoutList`).children).map(unit => {
      const n = (unit.querySelector(".num")).value.trim();
      return n ? `${(unit.querySelector("select.code-part")).value}-${n.padStart(3, '0')}` : null;
  }).filter(Boolean).join('\n');
  reportParts.push(`تسجيل خروج :\n\n${logoutContent || 'لا يوجد'}`);

  const filteredParts = reportParts.filter(Boolean);
  if (filteredParts.length > 0) report += `\n\n${separator}\n\n${filteredParts.join(`\n\n${separator}\n\n`)}`;

  const earlyReasonValue = (document.querySelector(`input[name='${prefix}-earlyReason']:checked`)).value;
  if (earlyReasonValue !== 'none') {
      let reasonText = (earlyReasonValue === 'restart') ? 'ريستارت' : (earlyReasonValue === 'realignment' ? 'اعادة اصطفاف' : (document.getElementById(`${prefix}-otherReasonText`)).value.trim());
      if (reasonText) report += `\n\nسبب نزول التقرير مبكرا : ${reasonText}`;
  }
  return report.trim();
}

function saveState() {
  const prefix = activeApp;
  const state = {
    reportType: (document.getElementById(`${prefix}-reportType`)).value,
    startHour: (document.getElementById(`${prefix}-startHour`)).value, startMin: (document.getElementById(`${prefix}-startMin`)).value, startPeriod: (document.getElementById(`${prefix}-startPeriod`)).value,
    endHour: (document.getElementById(`${prefix}-endHour`)).value, endMin: (document.getElementById(`${prefix}-endMin`)).value, endPeriod: (document.getElementById(`${prefix}-endPeriod`)).value,
    earlyReason: (document.querySelector(`input[name='${prefix}-earlyReason']:checked`)).value,
    otherReasonText: (document.getElementById(`${prefix}-otherReasonText`)).value,
    lists: {}, activeDynamicSections: []
  };
  const dynamicSectionsConfig = configs[prefix].dynamicSections;
  let listIds = ['mainList', 's1List', 's2List', 'logoutList'];
  if (prefix === 'ps') listIds.push('b1List');
  else if (prefix === 'hp') listIds.push('e1List');
  dynamicSectionsConfig.forEach(c => { if(document.getElementById(`${prefix}-${c.id}List`)) { listIds.push(`${c.id}List`); state.activeDynamicSections.push(c.id); } });

  listIds.forEach(id => {
    const container = document.getElementById(`${prefix}-${id}`);
    if (container) {
      state.lists[id] = Array.from(container.querySelectorAll(".unit-row")).map(row => ({
        name: (row.querySelector(".name"))?.value,
        letter: (row.querySelector("select.code-part"))?.value,
        num: (row.querySelector(".num"))?.value,
        commandNum: (row.querySelector(".command-num-input"))?.value,
        isShared: (row).dataset.role === 'shared',
        group: (row).dataset.group
      }));
    }
  });
  localStorage.setItem(configs[prefix].stateKey, JSON.stringify(state));
}

function loadState() {
  const prefix = activeApp;
  const stateJSON = localStorage.getItem(configs[prefix].stateKey);
  if (!stateJSON) {
      populateDefaultUnits();
      return;
  }
  const state = JSON.parse(stateJSON);
  const reportTypeEl = document.getElementById(`${prefix}-reportType`);
  if (prefix === 'ps') reportTypeEl.value = state.reportType || 'تحديث 1';
  else reportTypeEl.value = 'تقرير';

  (document.getElementById(`${prefix}-startHour`)).value = state.startHour || '01';
  (document.getElementById(`${prefix}-startMin`)).value = state.startMin || '00';
  (document.getElementById(`${prefix}-startPeriod`)).value = state.startPeriod || 'ص';
  (document.getElementById(`${prefix}-endHour`)).value = state.endHour || '01';
  (document.getElementById(`${prefix}-endMin`)).value = state.endMin || '00';
  (document.getElementById(`${prefix}-endPeriod`)).value = state.endPeriod || 'ص';

  if (state.earlyReason) {
      const earlyReasonRadio = document.getElementById(`${prefix}-reason${state.earlyReason.charAt(0).toUpperCase() + state.earlyReason.slice(1)}`);
      if (earlyReasonRadio) earlyReasonRadio.checked = true;
  }
  const otherReasonInput = document.getElementById(`${prefix}-otherReasonText`);
  otherReasonInput.value = state.otherReasonText || '';
  otherReasonInput.style.display = state.earlyReason === 'other' ? 'block' : 'none';

  if(state.activeDynamicSections) {
      state.activeDynamicSections.forEach((id) => {
          const config = configs[prefix].dynamicSections.find(c => c.id === id);
          if(config) createDynamicSection(id, config.title, config.defaultUnits, null, false);
      });
  }

  if (state.lists) {
      for (const listId in state.lists) {
          const container = document.getElementById(`${prefix}-${listId}`);
          if (container) {
              container.innerHTML = '';
              state.lists[listId].forEach(unitData => {
                  let row = listId === 'logoutList' ? logoutRow() : unitRow(unitData.name, container, unitData.isShared, parseInt(unitData.group, 10));
                  if (row.querySelector("select.code-part") && unitData.letter) (row.querySelector("select.code-part")).value = unitData.letter;
                  if (row.querySelector(".num") && unitData.num) (row.querySelector(".num")).value = unitData.num;
                  if (row.querySelector(".command-num-input") && unitData.commandNum) (row.querySelector(".command-num-input")).value = unitData.commandNum;
                  container.appendChild(row);
              });
          }
      }
  }
  populateDefaultUnits(); // Always call this to fill newly added static lists
  updateVisualStates();
}

function populateDefaultUnits(populateSubsections = true) {
  const prefix = activeApp;
  const config = configs[prefix];
  const mainList = document.getElementById(`${prefix}-mainList`);
  if(mainList.children.length === 0) config.mainUnits.forEach(name => addBase(mainList, name));

  if (populateSubsections) {
      const s1List = document.getElementById(`${prefix}-s1List`);
      if (s1List && s1List.children.length === 0) {
          const s1Prefix = prefix === 'hp' ? 'جيم ' : 'سين ';
          for (let i = 10; i <= 19; i++) addBase(s1List, `${s1Prefix}${i}`);
      }
      const s2List = document.getElementById(`${prefix}-s2List`);
      if (s2List && s2List.children.length === 0) {
          if (prefix === 'hp') for (let i = 10; i <= 19; i++) addBase(s2List, `لام ${i}`);
          else for (let i = 20; i <= 29; i++) addBase(s2List, `سين ${i}`);
      }
      if (prefix === 'ps') {
          const b1List = document.getElementById(`${prefix}-b1List`);
          if (b1List && b1List.children.length === 0) for (let i = 10; i <= 19; i++) addBase(b1List, `باء ${i}`);
      } else if (prefix === 'hp') {
          const e1List = document.getElementById(`${prefix}-e1List`);
          if (e1List && e1List.children.length === 0) for (let i = 10; i <= 19; i++) addBase(e1List, `عين ${i}`);
      }
  }
  updateVisualStates();
  saveState();
}

function createDynamicSection(id, title, defaultUnits, afterElement = null, shouldSave = true) {
  const prefix = activeApp;
  const container = document.getElementById(`${prefix}-dynamicSectionsContainer`);
  if (document.getElementById(`${prefix}-${id}Section`)) return;

  const sectionWrapper = document.createElement('div');
  sectionWrapper.id = `${prefix}-${id}Section`;
  const header = document.createElement('h3');
  header.style.justifyContent = 'space-between';
  const titleSpan = document.createElement('span'); titleSpan.textContent = title;
  const removeBtn = document.createElement('button'); removeBtn.textContent = '❌'; removeBtn.className = 'btn ghost icon';
  removeBtn.onclick = () => { sectionWrapper.remove(); (document.querySelector(`#${prefix}-addSectionSelect option[value="${id}"]`)).disabled = false; updateVisualStates(); saveState(); };
  header.append(titleSpan, removeBtn);

  const list = document.createElement('div'); list.id = `${prefix}-${id}List`; list.className = 'units';
  defaultUnits.forEach(unit => addBase(list, unit.name));

  const actions = document.createElement('div'); actions.className = 'actions';
  const addBtn = document.createElement('button'); addBtn.textContent = '+ إضافة توجيه'; addBtn.className = 'btn ghost';
  addBtn.onclick = () => addBase(list);
  actions.appendChild(addBtn);

  const divider = document.createElement('hr'); divider.className = 'divider';
  sectionWrapper.append(header, list, actions, divider);

  const desiredOrder = configs[prefix].dynamicSections.map(c => c.id);
  const newSectionIndex = desiredOrder.indexOf(id);
  const insertBeforeElement = Array.from(container.children).find(el => desiredOrder.indexOf(el.id.replace(`${prefix}-`, '').replace('Section', '')) > newSectionIndex);
  container.insertBefore(sectionWrapper, insertBeforeElement);
  (document.querySelector(`#${prefix}-addSectionSelect option[value="${id}"]`)).disabled = true;

  if (shouldSave) { updateVisualStates(); saveState(); }
}

function setupEventListeners(prefix) {
    const addLogout = document.getElementById(`${prefix}-addLogout`);
    if(addLogout) addLogout.onclick = () => document.getElementById(`${prefix}-logoutList`).appendChild(logoutRow());

    const copyBtn = document.getElementById(`${prefix}-copyBtn`);
    if(copyBtn) copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(formatReport()).then(() => {
        const ok = document.getElementById(`${prefix}-okMsg`);
        ok.textContent = `✅ تم نسخ تقرير ${configs[activeApp].reportName}`; ok.style.display = "block";
        setTimeout(() => (ok.style.display = "none"), 2000);
      });
    });

    const parseBtn = document.getElementById(`${prefix}-parseReportQuickBtn`);
    if(parseBtn) parseBtn.addEventListener('click', parseAndFillReportLegacy);

    const clearBtn = document.getElementById(`${prefix}-clearFormBtn`);
    if(clearBtn) clearBtn.addEventListener('click', () => { clearAllLists(); populateDefaultUnits(); (document.getElementById(`${prefix}-pasteArea`)).value = ''; saveState(); showParseMessage('✅ تم مسح النموذج.'); });

    document.querySelectorAll(`input[name="${prefix}-earlyReason"]`).forEach(radio => {
      radio.addEventListener('change', (e) => { (document.getElementById(`${prefix}-otherReasonText`)).style.display = (e.target).value === 'other' ? 'block' : 'none'; saveState(); });
    });
    const otherText = document.getElementById(`${prefix}-otherReasonText`);
    if(otherText) otherText.addEventListener('input', saveState);

    const wrap = document.getElementById(`${prefix}-wrap`);
    if(wrap) wrap.querySelectorAll('select, input[type="text"]').forEach(el => { if(!el.classList.contains('name') && !el.classList.contains('num')) el.addEventListener('change', saveState); });

    const addSecBtn = document.getElementById(`${prefix}-addSectionBtn`);
    if(addSecBtn) addSecBtn.addEventListener('click', () => {
        const sel = document.getElementById(`${prefix}-addSectionSelect`);
        const config = configs[prefix].dynamicSections.find(c => c.id === sel.value);
        if (config) createDynamicSection(config.id, config.title, config.defaultUnits);
    });
}

function switchApp(appName) {
    if (appName === activeApp) return;
    saveState();
    activeApp = appName;
    document.body.classList.remove('ps-active', 'hp-active');
    document.body.classList.add(`${appName}-active`);
    document.getElementById('ps-tab').classList.toggle('active', appName === 'ps');
    document.getElementById('hp-tab').classList.toggle('active', appName === 'hp');
    document.getElementById('ps-wrap').classList.toggle('active', appName === 'ps');
    document.getElementById('hp-wrap').classList.toggle('active', appName === 'hp');
    loadState();
}

function setupDynamicSectionUI(prefix) {
    const sel = document.getElementById(`${prefix}-addSectionSelect`);
    if(!sel) return;
    sel.innerHTML = '';
    configs[prefix].dynamicSections.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.title; sel.appendChild(o); });
}

function initApp() {
  fillTime('ps'); fillTime('hp');
  setupEventListeners('ps'); setupEventListeners('hp');
  setupDynamicSectionUI('ps'); setupDynamicSectionUI('hp');
  document.body.classList.add(`${activeApp}-active`);
  const hpReportType = document.getElementById('hp-reportType');
  if(hpReportType) { hpReportType.innerHTML = ''; const o = document.createElement('option'); o.value = 'تقرير'; o.textContent = 'تقرير'; hpReportType.appendChild(o); }
  document.getElementById("ps-tab").addEventListener("click", () => switchApp('ps'));
  document.getElementById("hp-tab").addEventListener("click", () => switchApp('hp'));
  loadState();
}
document.addEventListener("DOMContentLoaded", initApp);
