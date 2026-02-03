import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const UNITS = ["px", "%", "vw", "vh", "em", "rem"];
const ITEM_SIZE_OPTIONS = ["auto", "100%", "custom"];

const App = () => {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [gap, setGap] = useState(8);
  const [containerWidth, setContainerWidth] = useState(100);
  const [containerWidthUnit, setContainerWidthUnit] = useState("%");
  const [containerHeight, setContainerHeight] = useState(500);
  const [containerHeightUnit, setContainerHeightUnit] = useState("px");
  // 子要素のサイズ設定
  const [itemWidthOption, setItemWidthOption] = useState("100%");
  const [itemWidthValue, setItemWidthValue] = useState(100);
  const [itemWidthUnit, setItemWidthUnit] = useState("px");
  const [itemHeightOption, setItemHeightOption] = useState("100%");
  const [itemHeightValue, setItemHeightValue] = useState(100);
  const [itemHeightUnit, setItemHeightUnit] = useState("px");
  const [selectedCells, setSelectedCells] = useState([]);
  const [gridItems, setGridItems] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);

  // 子要素のサイズ文字列を取得
  const getItemWidth = () => {
    if (itemWidthOption === "custom") {
      return `${itemWidthValue}${itemWidthUnit}`;
    }
    return itemWidthOption;
  };

  const getItemHeight = () => {
    if (itemHeightOption === "custom") {
      return `${itemHeightValue}${itemHeightUnit}`;
    }
    return itemHeightOption;
  };

  // クリップボードにコピー
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() =>
        toast.success("Copied to clipboard!", {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 500,
        })
      )
      .catch(() =>
        toast.error("Failed to copy text.", {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 500,
        })
      );
  };

  // グリッド全体のリセット
  const resetGrid = () => {
    setColumns(5);
    setRows(5);
    setGap(8);
    setContainerWidth(100);
    setContainerWidthUnit("%");
    setContainerHeight(500);
    setContainerHeightUnit("px");
    setItemWidthOption("100%");
    setItemWidthValue(100);
    setItemWidthUnit("px");
    setItemHeightOption("100%");
    setItemHeightValue(100);
    setItemHeightUnit("px");
    setSelectedCells([]);
    setGridItems([]);
  };

  // 個別のグリッドアイテムを削除（ダブルクリック）
  const handleItemDoubleClick = (itemId) => {
    setGridItems((prev) => {
      const filtered = prev.filter((item) => item.id !== itemId);
      // 番号を振り直す
      return filtered.map((item, index) => ({
        ...item,
        id: `div-${index + 1}`,
        content: `${index + 1}`,
      }));
    });
    toast.info("Item removed!", {
      position: "bottom-center",
      hideProgressBar: true,
      autoClose: 500,
    });
  };

  const generateCells = () => {
    const cells = [];
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= columns; col++) {
        cells.push({ id: `${row}-${col}`, row, col });
      }
    }
    return cells;
  };

  const cells = generateCells();

  const handleMouseDown = (cellId) => {
    setSelectedCells([cellId]);
    setIsSelecting(true);
  };

  const handleMouseEnter = (cellId) => {
    if (isSelecting) {
      setSelectedCells((prev) => [...new Set([...prev, cellId])]);
    }
  };

  const handleMouseUp = () => {
    if (selectedCells.length > 0) {
      const selectedRows = selectedCells.map((id) =>
        parseInt(id.split("-")[0], 10)
      );
      const selectedCols = selectedCells.map((id) =>
        parseInt(id.split("-")[1], 10)
      );

      const startRow = Math.min(...selectedRows);
      const endRow = Math.max(...selectedRows);
      const startCol = Math.min(...selectedCols);
      const endCol = Math.max(...selectedCols);

      // 既存アイテムとの重複チェック
      const hasOverlap = gridItems.some((item) => {
        const rowOverlap = startRow <= item.endRow && endRow >= item.startRow;
        const colOverlap = startCol <= item.endCol && endCol >= item.startCol;
        return rowOverlap && colOverlap;
      });

      if (hasOverlap) {
        toast.warning("既存のアイテムと重複しています", {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 1500,
        });
      } else {
        setGridItems((prev) => [
          ...prev,
          {
            id: `div-${prev.length + 1}`,
            startRow,
            endRow,
            startCol,
            endCol,
            content: `${prev.length + 1}`,
          },
        ]);
      }
    }

    setSelectedCells([]);
    setIsSelecting(false);
  };

  return (
    <div className="app-container">
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
        autoClose={500}
        className="custom-toast-container"
      />

      <header>
        <h1>CSS Grid Generator</h1>
        <p>ドラッグ操作でグリッドレイアウトを視覚的に作成し、HTML/CSSコードを自動生成</p>
      </header>
      <div className="controls">
        <label>
          Columns:
          <input
            type="number"
            value={columns}
            onChange={(e) =>
              setColumns(Math.max(1, parseInt(e.target.value, 10) || 1))
            }
          />
        </label>
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) =>
              setRows(Math.max(1, parseInt(e.target.value, 10) || 1))
            }
          />
        </label>
        <label>
          Gap (px):
          <input
            type="number"
            value={gap}
            onChange={(e) =>
              setGap(Math.max(0, parseInt(e.target.value, 10) || 0))
            }
          />
        </label>
        <label>
          Width:
          <div className="input-with-unit">
            <input
              type="number"
              value={containerWidth}
              onChange={(e) =>
                setContainerWidth(Math.max(0, parseFloat(e.target.value) || 0))
              }
            />
            <select
              value={containerWidthUnit}
              onChange={(e) => setContainerWidthUnit(e.target.value)}
            >
              {UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label>
          Height:
          <div className="input-with-unit">
            <input
              type="number"
              value={containerHeight}
              onChange={(e) =>
                setContainerHeight(Math.max(0, parseFloat(e.target.value) || 0))
              }
            />
            <select
              value={containerHeightUnit}
              onChange={(e) => setContainerHeightUnit(e.target.value)}
            >
              {UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </label>
        <button onClick={resetGrid}>Reset Grid</button>
      </div>
      <div className="controls controls-items">
        <span className="controls-label">Item Size:</span>
        <label>
          Item Width:
          <div className="input-with-unit">
            <select
              value={itemWidthOption}
              onChange={(e) => setItemWidthOption(e.target.value)}
            >
              {ITEM_SIZE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {itemWidthOption === "custom" && (
              <>
                <input
                  type="number"
                  value={itemWidthValue}
                  onChange={(e) =>
                    setItemWidthValue(Math.max(0, parseFloat(e.target.value) || 0))
                  }
                />
                <select
                  value={itemWidthUnit}
                  onChange={(e) => setItemWidthUnit(e.target.value)}
                >
                  {UNITS.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </label>
        <label>
          Item Height:
          <div className="input-with-unit">
            <select
              value={itemHeightOption}
              onChange={(e) => setItemHeightOption(e.target.value)}
            >
              {ITEM_SIZE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {itemHeightOption === "custom" && (
              <>
                <input
                  type="number"
                  value={itemHeightValue}
                  onChange={(e) =>
                    setItemHeightValue(Math.max(0, parseFloat(e.target.value) || 0))
                  }
                />
                <select
                  value={itemHeightUnit}
                  onChange={(e) => setItemHeightUnit(e.target.value)}
                >
                  {UNITS.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </label>
      </div>
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: `${gap}px`,
          padding: "1em",
          width: `calc(${columns} * 200px + ${(columns - 1) * gap}px)`,
          height: `calc(${rows} * 80px + ${(rows - 1) * gap}px)`,
          margin: "0 auto",
        }}
        onMouseUp={handleMouseUp}
      >
        {cells.map((cell) => {
          const isHidden = gridItems.some(
            (item) =>
              cell.row >= item.startRow &&
              cell.row <= item.endRow &&
              cell.col >= item.startCol &&
              cell.col <= item.endCol
          );
          return (
            !isHidden && (
              <div
                key={cell.id}
                className={`grid-cell ${
                  selectedCells.includes(cell.id) ? "selected" : ""
                }`}
                onMouseDown={() => handleMouseDown(cell.id)}
                onMouseEnter={() => handleMouseEnter(cell.id)}
              ></div>
            )
          );
        })}
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`grid-item ${item.id}`}
            style={{
              gridColumn: `${item.startCol} / ${item.endCol + 1}`,
              gridRow: `${item.startRow} / ${item.endRow + 1}`,
            }}
            onDoubleClick={() => handleItemDoubleClick(item.id)}
            title="ダブルクリックで削除"
          >
            {item.content}
          </div>
        ))}
      </div>
      <div className="output-container">
        <div className="output-html">
          <h2>Generated HTML</h2>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(
                `<div class="grid-container">\n${gridItems
                  .map(
                    (item) => `  <div class="${item.id}">${item.content}</div>`
                  )
                  .join("\n")}\n</div>`
              )
            }
          >
            Copy
          </button>
          <pre>{`<div class="grid-container">\n${gridItems
            .map((item) => `  <div class="${item.id}">${item.content}</div>`)
            .join("\n")}\n</div>`}</pre>
        </div>
        <div className="output">
          <h2>Generated CSS</h2>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(
                `.grid-container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  gap: ${gap}px;
  width: ${containerWidth}${containerWidthUnit};
  height: ${containerHeight}${containerHeightUnit};
}

/* 子要素の共通スタイル（プレースホルダー） */
.grid-container > div {
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}
` +
                  gridItems
                    .map(
                      (item) => `
.${item.id} {
  grid-column: ${item.startCol} / span ${item.endCol - item.startCol + 1};
  grid-row: ${item.startRow} / span ${item.endRow - item.startRow + 1};
  width: ${getItemWidth()};
  height: ${getItemHeight()};
}
`
                    )
                    .join("\n")
              )
            }
          >
            Copy
          </button>
          <pre>
            {`.grid-container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  gap: ${gap}px;
  width: ${containerWidth}${containerWidthUnit};
  height: ${containerHeight}${containerHeightUnit};
}

/* 子要素の共通スタイル（プレースホルダー） */
.grid-container > div {
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}`}
          </pre>
          <pre>
            {gridItems
              .map(
                (item) => `
.${item.id} {
  grid-column: ${item.startCol} / span ${item.endCol - item.startCol + 1};
  grid-row: ${item.startRow} / span ${item.endRow - item.startRow + 1};
  width: ${getItemWidth()};
  height: ${getItemHeight()};
}
`
              )
              .join("\n")}
          </pre>
        </div>
      </div>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} CSS Grid Generator |{" "}
          <a
            href="https://codequest.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by CodeQuest
          </a>
          <a
            href="https://codequest.work/generator/flex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            | Flex Generator
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
