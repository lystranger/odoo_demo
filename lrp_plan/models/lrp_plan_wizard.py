from odoo import models, fields

class PlanWizard(models.TransientModel):
    _name = 'lrp_plan.plan_wizard'
    _description = 'Plan Wizard'

    name = fields.Char(string='销售订单', required=True)
    factory = fields.Char(string='所属工厂')
    batch_number = fields.Char(string='计划批号')
    status = fields.Selection([
        ('draft', 'Draft'),
        ('confirmed', 'Confirmed'),
        ('done', 'Done'),
        ('cancel', 'Cancelled'),
    ], string='状态', default='draft')
    schedule_date = fields.Date(string='计划日期')
    notes = fields.Text(string='备注')
