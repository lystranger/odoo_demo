# -*- coding: utf-8 -*-

from odoo import models, fields, api


class YlhcSubForm(models.Model):
    _name = 'ylhc_sub_form.test_form'
    _description = 'ylhc sub form'

    name = fields.Char(string='Name')
    value = fields.Integer(string='Value')
    value2 = fields.Float(compute="_value_pc", store=True)
    description = fields.Text(string='Description')

    @api.depends('value')
    def _value_pc(self):
        for record in self:
            record.value2 = float(record.value) / 100

