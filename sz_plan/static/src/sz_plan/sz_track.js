/** @odoo-module **/

import { Component, useState, useEffect, useRef } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class SzPlan extends Component {

    setup() {
        super.setup();

        this.orm = useService('orm')
        this.action = useService("action");

        this.rootRef = useRef("root");

        // tree ref
        this.leftTreeRef = useRef("leftTree");
        this.rightTreeRef = useRef("rightTree");

        this.leftArrow = useRef("leftArrow");
        this.rightArrow = useRef("rightArrow");
        
        // left tree
        useEffect(() => {
            this.instance_left_tree();
        }, () => [this.leftTreeRef.el]);

        // right tree
        useEffect(() => {
            this.instance_right_tree();
        }, () => [this.rightTreeRef.el]);
    }

    onRecordSaved(record) {
        this.data = record.data
    }

    on_click_left() {
        if (this.leftArrow.el.classList.contains("inversed")) {
            this.leftArrow.el.classList.remove("inversed");
            this.rightArrow.el.classList.remove("d-none");
            this.rootRef.el.querySelector(".left-table").classList.remove("d-none");
        } else {
            this.leftArrow.el.classList.add("inversed");
            this.rightArrow.el.classList.add("d-none");
            this.rootRef.el.querySelector(".left-table").classList.add("d-none");
        }
    }

    on_click_right() {
        if (this.rightArrow.el.classList.contains("inversed")) {
            this.rightArrow.el.classList.remove("inversed");
            this.leftArrow.el.classList.remove("d-none");
            this.rootRef.el.querySelector(".right-table").classList.remove("d-none");
        } else {
            this.rightArrow.el.classList.add("inversed");
            this.leftArrow.el.classList.add("d-none");
            this.rootRef.el.querySelector(".right-table").classList.add("d-none");
        }
    }

    instance_left_tree() {

        //define data array
        var tabledata = [
            {id:1, name:"客户甲", order_no:12, material_no:"002", material_name:'测试', 'order_num': 300, 'plan_date': '2024-10-30', 'plan_num': 65},
            {id:2, name:"客户乙", order_no:13, material_no:"003", material_name: '测试', 'order_num': 309, 'plan_date': '2025-10-31', 'plan_num': 50},
            {id:3, name:"客户丙", order_no:42, material_no:"004", material_name: '测试', 'order_num': 189, 'plan_date': '2026-10-31', 'plan_num': 69}
        ];

        this.left_table = new Tabulator(this.leftTreeRef.el, {
            data: tabledata,
            selectableRows: 1, //make rows selectable
            columns:[              
                {title:"客户", field:"name", editor:"input"},
                {title:"订单号", field:"order_no", hozAlign:"left", editor:"input"},
                {title:"物料代码", field:"material_no"},
                {title:"物料编号", field:"material_name", hozAlign:"center", width:100, editor:"input"},
                {title:"订单件数", field:"order_num", editor:"input"},
                {title:"订单交货日期", field:"plan_date", sorter:"date", hozAlign:"center", editor:"input"},
                {title:"排产数", field:"plan_num", hozAlign:"center", sorter:"boolean", editor:"input"},
            ],
        });

        this.left_table.on("rowSelectionChanged", (data, rows) => {
            // 根据data计逄右侧表的逻辑,调用 this.right_table.setData() 进行数据展示
        });

        this.left_table.on("cellEdited", function(cell){
            //cell - cell component
            
        });

    }

    instance_right_tree() {

        var datas = [
            { id: 1, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            { id: 2, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 3, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 4, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 5, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 6, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 7, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 8, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 9, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 10, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
            { id: 11, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_0date_08_28: 64, 8_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64, 21_1: 38, 21_2: 38, 21_3: 38, 21_4: 38, 21_5: 38, 21_6: 38, 21_7: 38, 22_1: 46, 22_2: 46, 22_3: 46, 22_4: 46, 22_5: 46, 22_6: 46, 22_7: 46, 23_1: 55, 23_2: 76, 23_3: 76, 23_4: 76, 23_5: 76, 23_6: 76, 23_7: 76, 24_1: 76, 24_2: 76, 24_3: 76, 24_4: 76, 24_5: 76, 24_6: 76, 24_7: 76, 25_1: 76, 25_2: 76, 25_3: 76, 25_4: 76, 25_5: 76, 25_6: 76, 25_7: 76 },
        ]

        this.right_table = new Tabulator(this.rightTreeRef.el, {
            columnHeaderVertAlign: "bottom",
            data: datas,
            columns: [
                {
                    title: "8/19",
                    columns: [
                        { title: "周一", field: "date_08_19", width: 66, editor: "input" },
                    ]
                }, 
                {
                    title: "8/20",
                    columns: [
                        { title: "周二", field: "date_08_20", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/21",
                    columns: [
                        { title: "周三", field: "date_08_21", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/22",
                    columns: [
                        { title: "周四", field: "date_08_22", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/23",
                    columns: [
                        { title: "周五", field: "date_08_23", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/24",
                    columns: [
                        { title: "周六", field: "date_08_24", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/25",
                    columns: [
                        { title: "周日", field: "date_08_25", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/26",
                    columns: [
                        { title: "周一", field: "date_08_26", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/27",
                    columns: [
                        { title: "周二", field: "date_0date_08_28", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/28",
                    columns: [
                        { title: "周三", field: "8_28", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/29",
                    columns: [
                        { title: "周四", field: "date_08_29", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/30",
                    columns: [
                        { title: "周五", field: "date_08_30", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "8/31",
                    columns: [
                        { title: "周六", field: "date_08_31", width: 66, editor: "input" },
                    ]
                },
                {
                    title: "9/1",
                    columns: [
                        { title: "周日", field: "date_09_01", width: 66, editor: "input" },
                    ]
                }
            ]
        });
    }

}

SzPlan.template = "sz_plan.plan";
SzPlan.components = {};

registry.category("actions").add("sz_plan", SzPlan);
