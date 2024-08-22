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
        this.leftTreeRef = useRef("tree");
        
        // left tree
        useEffect(() => {
            this.instance_tree();
        }, () => [this.leftTreeRef.el]);
    }

    onRecordSaved(record) {
        this.data = record.data
        // 左这里写的你的计算逻辑。生成计划以后调用
        // this.left_table.setData(data);
        // editor:"list",
    }

    instance_tree() {

        //define data array
        var tabledata = [
            {id:1, name:"客户甲", order_no:12, material_no:"002", material_name:'测试', 'order_num': 300, 'plan_date': '2024-10-30', 'plan_num': 65, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:2, name:"客户乙", order_no:13, material_no:"003", material_name: '测试', 'order_num': 309, 'plan_date': '2025-10-31', 'plan_num': 50, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:3, name:"客户丙", order_no:42, material_no:"004", material_name: '测试', 'order_num': 189, 'plan_date': '2026-10-31', 'plan_num': 69, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:4, name:"客户丁", order_no:15, material_no:"005", material_name: '测试', 'order_num': 290, 'plan_date': '2027-10-31', 'plan_num': 75, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:5, name:"客户戊", order_no:16, material_no:"006", material_name: '测试', 'order_num': 280, 'plan_date': '2028-10-31', 'plan_num': 80, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:6, name:"客户己", order_no:17, material_no:"007", material_name: '测试', 'order_num': 270, 'plan_date': '2029-10-31', 'plan_num': 85, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:7, name:"客户庚", order_no:18, material_no:"008", material_name: '测试', 'order_num': 260, 'plan_date': '2030-10-31', 'plan_num': 90, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:8, name:"客户辛", order_no:19, material_no:"009", material_name: '测试', 'order_num': 250, 'plan_date': '2031-10-31', 'plan_num': 95, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:9, name:"客户壬", order_no:20, material_no:"010", material_name: '测试', 'order_num': 240, 'plan_date': '2032-10-31', 'plan_num': 100, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
            {id:10, name:"客户癸", order_no:21, material_no:"011", material_name: '测试', 'order_num': 230, 'plan_date': '2033-10-31', 'plan_num': 105, date_08_19: 30, date_08_20: 40, date_08_21: 36, date_08_22: 38, date_08_23: 38, date_08_24: 38, date_08_25: 38, date_08_26: 64, date_08_27: 64, date_08_28: 64, date_08_29: 64, date_08_30: 64, date_08_31: 64, date_09_01: 64},
        ];

        this.left_table = new Tabulator(this.leftTreeRef.el, {
            data: tabledata,
            selectableRows: 1, //make rows selectable
            rowHeader:{formatter:"rownum", headerSort:false, hozAlign:"center", resizable:false, frozen:true},
            columns:[              
                {title:"客户", field:"name", editor:"input", columnHeaderVertAlign:"middle", frozen:true},
                {title:"订单号", field:"order_no", hozAlign:"left", columnHeaderVertAlign:"middle", frozen:true},
                {title:"物料代码", field:"material_no", columnHeaderVertAlign:"middle", frozen:true},
                {title:"物料编号", field:"material_name", hozAlign:"center", width:100, columnHeaderVertAlign:"middle", frozen:true},
                {title:"订单件数", field:"order_num", editor:"input", columnHeaderVertAlign:"middle", frozen:true},
                {title:"订单交货日期", field:"plan_date", sorter:"date", hozAlign:"center", columnHeaderVertAlign:"middle", frozen:true},
                {title:"排产数", field:"plan_num", hozAlign:"center", sorter:"boolean", editor:"input", bottomCalc:'sum',columnHeaderVertAlign:"middle", frozen:true},
                {
                    title: "8/19",
                    columns: [
                        { title: "周一", field: "date_08_19", width: 66, editor: "number", bottomCalc:'sum' },
                    ]
                }, 
                {
                    title: "8/20",
                    columns: [
                        { title: "周二", field: "date_08_20", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/21",
                    columns: [
                        { title: "周三", field: "date_08_21", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/22",
                    columns: [
                        { title: "周四", field: "date_08_22", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/23",
                    columns: [
                        { title: "周五", field: "date_08_23", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/24",
                    columns: [
                        { title: "周六", field: "date_08_24", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/25",
                    columns: [
                        { title: "周日", field: "date_08_25", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/26",
                    columns: [
                        { title: "周一", field: "date_08_26", width: 66, editor: "number", bottomCalc:'sum' },
                    ]
                },
                {
                    title: "8/27",
                    columns: [
                        { title: "周二", field: "date_08_27", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/28",
                    columns: [
                        { title: "周三", field: "date_08_28", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/29",
                    columns: [
                        { title: "周四", field: "date_08_29", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/30",
                    columns: [
                        { title: "周五", field: "date_08_30", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "8/31",
                    columns: [
                        { title: "周六", field: "date_08_31", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                },
                {
                    title: "9/1",
                    columns: [
                        { title: "周日", field: "date_09_01", width: 66, editor: "number", bottomCalc:'sum'  },
                    ]
                }
            ],
        });

        // cell changed
        this.left_table.on("cellEdited", (cell) => {
            var row = cell.getRow().getData();
            debugger
            var sum = 0;
            for (var key in row) {
                if (key.startsWith('date_')) {
                    sum += row[key];
                }
            }
            row.plan_num = sum;
            this.left_table.updateData([row]);
        });
    }

}

SzPlan.template = "sz_plan.plan";
SzPlan.components = {};

registry.category("actions").add("sz_plan", SzPlan);
