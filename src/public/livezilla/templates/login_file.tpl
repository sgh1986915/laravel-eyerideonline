<input type="hidden" id="lz_form_active_<!--name-->" value="<!--active-->">
<table id="lz_form_<!--name-->" class="lz_input">
	<tr>
		<td id="lz_form_caption_<!--name-->" class="lz_form_field"><!--caption--></td>
		<td>
            <div class="lz_form_box lz_form_file">
                <input type="file" id="<!--id-->" name="form_<!--name-->" onchange="if(this.files.length>0){parent.lz_chat_save_input_value('<!--name-->',this.files[0]);}else{parent.lz_chat_save_input_value('<!--name-->',null);}">
            </div>
            <div class="lz_form_info_box" id="lz_form_info_<!--name-->"><!--info_text--></div>
        </td>
        <td class="lz_form_icon"><div id="lz_form_mandatory_<!--name-->" style="display:none;"></div></td>
	</tr>
</table>