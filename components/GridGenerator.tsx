"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CodeBlock } from "@/components/CodeBlock";

const UNITS = ["px", "%", "vw", "vh", "em", "rem"];

type GridItem = {
  id: string;
  startRow: number;
  endRow: number;
  startCol: number;
  endCol: number;
  content: string;
};

type Cell = {
  id: string;
  row: number;
  col: number;
};

export function GridGenerator() {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [gap, setGap] = useState(8);
  const [containerWidth, setContainerWidth] = useState(100);
  const [containerWidthUnit, setContainerWidthUnit] = useState("%");
  const [containerHeight, setContainerHeight] = useState(500);
  const [containerHeightUnit, setContainerHeightUnit] = useState("px");
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);

  // グリッド全体のリセット
  const resetGrid = () => {
    setColumns(5);
    setRows(5);
    setGap(8);
    setContainerWidth(100);
    setContainerWidthUnit("%");
    setContainerHeight(500);
    setContainerHeightUnit("px");
    setSelectedCells([]);
    setGridItems([]);
  };

  // 個別のグリッドアイテムを削除（ダブルクリック）
  const handleItemDoubleClick = (itemId: string) => {
    setGridItems((prev) => {
      const filtered = prev.filter((item) => item.id !== itemId);
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

  const generateCells = (): Cell[] => {
    const cells: Cell[] = [];
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= columns; col++) {
        cells.push({ id: `${row}-${col}`, row, col });
      }
    }
    return cells;
  };

  const cells = generateCells();

  const handleMouseDown = (cellId: string) => {
    setSelectedCells([cellId]);
    setIsSelecting(true);
  };

  const handleMouseEnter = (cellId: string) => {
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
    <>
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
        autoClose={500}
        className="custom-toast-container"
      />

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
                setContainerWidth(
                  Math.max(0, parseFloat(e.target.value) || 0)
                )
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
                setContainerHeight(
                  Math.max(0, parseFloat(e.target.value) || 0)
                )
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
      {(() => {
        const htmlCode = `<div class="grid-container">\n${gridItems
          .map(
            (item, i) => `  <div class="item-${i + 1}">${item.content}</div>`
          )
          .join("\n")}\n</div>`;

        const containerCss = `.grid-container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  gap: ${gap}px;
  width: ${containerWidth}${containerWidthUnit};
  height: ${containerHeight}${containerHeightUnit};
}`;

        const itemCss = gridItems
          .map(
            (item, i) =>
              `.item-${i + 1} { grid-area: ${item.startRow} / ${item.startCol} / ${item.endRow + 1} / ${item.endCol + 1}; }`
          )
          .join("\n");

        const responsiveCss = `@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  .grid-container > * {
    grid-area: auto;
  }
}`;

        const fullCss = `${containerCss}\n\n${itemCss}\n\n${responsiveCss}`;

        return (
          <div className="preset-output-container">
            <div className="preset-output-col">
              <h2>HTML</h2>
              <CodeBlock code={htmlCode} label="HTML" />
            </div>
            <div className="preset-output-col">
              <h2>CSS</h2>
              <CodeBlock code={fullCss} label="CSS" />
            </div>
          </div>
        );
      })()}
    </>
  );
}
